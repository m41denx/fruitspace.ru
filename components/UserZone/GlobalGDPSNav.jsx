import Link from "next/link";
import styles from "@/components/NavBar/NavBar.module.css";
import NavBar from "@/components/NavBar/NavBar";

import logo from "@/components/assets/ava.png";

import {useRouter} from "next/router";
import {useGlobalLocale} from "@/locales/useLocale";
import {DropdownItem, DropdownMenu} from "@/components/NavBar/DropDown";
import RightSvg from "@/assets/icons/right.svg";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NavItem from "@/components/NavBar/NavItem";
import {useEffect, useState} from "react";
import useFiberAPI from "@/fiber/fiber";


export default function GlobalGDPSNav(props) {
    const router = useRouter()

    const globalLocale = useGlobalLocale(router)

    const [open, setOpen] = useState(false)

    const users = props.users

    const [userList, setUserList] = useState([])

    const api = useFiberAPI()
    useEffect(()=>{
        getUserlist(users, setUserList, api)
    }, [])


    return (
        <NavBar>
            <Link href={"/"} legacyBehavior><>
                <img src={props.icon} alt="logo" className={styles.logo}></img>
                <h2 className="font-normal text-lg">{props.name}</h2>
            </></Link>
            <span className={`${styles.delim} !mr-0`} />
            <Link href={"/"} legacyBehavior><img src={logo.src} alt="logo" className={`${styles.logo} !h-[100%]`}></img></Link>
            <span style={{flex:1}}></span>
            <NavItem profile icon={<img src={props.icon}/>} open={open} setOpen={setOpen} name="profile">
                <DropdownMenu>
                    {userList}
                    <Link
                        href={`/gdps/${router.query.srvid}?fresh=y`}
                        prefetch={false}
                        legacyBehavior>
                        <DropdownItem key="fresh" leftIcon={<LogoutOutlinedIcon/>}>{globalLocale.get('addaccount')}</DropdownItem>
                    </Link>
                </DropdownMenu>
            </NavItem>
        </NavBar>
    );
}


const getUserlist = (users, setUserList, api) => {
    let userlist = []
    Object.keys(users).forEach((srvid)=>{
        if (srvid==="default") return
        const accounts = users[srvid]
        accounts.forEach((acc, i)=>{
            api.authorization = acc
            api.gdps_users.get(srvid).then(accinfo=>{
                if (!accinfo.uname) return
                userlist.push(<Link href={`/gdps/${srvid}/panel?acc=${acc}`} prefetch={false} legacyBehavior>
                    <DropdownItem key={`${i}${srvid}`} leftIcon={
                        <img onError={(img)=>{img.target.src=`https://cdn.fruitspace.one/server_icons/gd_default.png`}}
                             src={`https://cdn.fruitspace.one/server_icons/gd_${srvid}.png`}/>
                    } rightIcon={<RightSvg />}>
                        {accinfo.uname}<span className="text-sm px-1 py-0 bg-[var(--btn-color)] rounded ml-1">{srvid}</span>
                    </DropdownItem>
                </Link>)
            })

        })
    })
    setUserList(userlist)
}