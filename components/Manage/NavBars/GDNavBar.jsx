import NavItem from "../../NavBar/NavItem";
import SideBar from "../../NavBar/SideBar";

import PersonIcon from '@mui/icons-material/Person';

import StoreIcon from '@mui/icons-material/Store';
import AnalyticsIcon from "../../assets/icons/panel_analytics.svg"
import MusicIcon from "../../assets/icons/panel_music.svg"
import RolesIcon from "../../assets/icons/panel_roles.svg"
import ChestsIcon from "../../assets/icons/panel_chests.svg"
import QuestsIcon from "../../assets/icons/panel_quests.svg"
import LevelpacksIcon from "../../assets/icons/panel_levelpacks.svg"
import SettingsIcon from "../../assets/icons/panel_settings.svg"
import ActionsIcon from "../../assets/icons/panel_actions.svg"

import Link from "next/link";
import {useRouter} from "next/router";
import {Tooltip} from "@mui/material";
import {useRecoilState} from "recoil";
import GDServer from "../../../states/gd_server";
import {useEffect} from "react";
import {useCookies} from "react-cookie";
import useEffectOnce from "../../Hooks";


export default function GDNavBar(props) {

    const router = useRouter();
    const srvid = router.query.srvid
    let action = router.pathname.split("/")
    action = action[action.length-1]

    const [cookies, setCookie, delCookie] = useCookies(["token"])
    const [srv, setSrv] = useRecoilState(GDServer)



    useEffectOnce(()=>{
        fetch("https://api.fruitspace.one/v1/manage/gd/get",
            {credentials:"include", method: "POST", headers: {"Authorization": cookies["token"]},
            body: JSON.stringify({id:srvid})}).then(resp=>resp.json()).then((resp)=>{
                if(resp.srvid) setSrv(resp);
                else router.push("/profile/servers");
        })
    })

    return srv.tariffConfig?(
        <SideBar>
            <Link href={"/manage/gd/"+srvid+"/"} passHref>
                <NavItem icon={<AnalyticsIcon/>} acetone square active={action==="[srvid]"}>
                    <Tooltip title="Аналитика" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>
            {srv.tariffConfig.CustomMusic && <Link href={"/manage/gd/"+srvid+"/music"} passHref>
                <NavItem icon={<MusicIcon/>} acetone square active={action==="music"}>
                    <Tooltip title="Музыка" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>}
            {/* {srv.tariffConfig.Roles && <Link href={"/manage/gd/"+srvid+"/roles"}>
                <NavItem icon={<RolesIcon/>} acetone square active={action==="roles"}>
                    <Tooltip title="Игроки и роли" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>} */}
            <Link href={"/manage/gd/"+srvid+"/chests"}>
                <NavItem icon={<ChestsIcon/>} acetone square active={action==="chests"}>
                    <Tooltip title="Сундуки" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>
            {/* {srv.tariffConfig.Quests && <Link href={"/manage/gd/"+srvid+"/quests"}>
                <NavItem icon={<QuestsIcon/>} acetone square active={action==="quests"}>
                    <Tooltip title="Уровни и квесты" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>} */}
            {/* {srv.tariffConfig.Levelpacks && <Link href={"/manage/gd/"+srvid+"/levelpacks"}>
                <NavItem icon={<LevelpacksIcon/>} acetone square active={action==="levelpacks"}>
                    <Tooltip title="Маппаки и испытания" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>} */}
            <Link href={"/manage/gd/"+srvid+"/settings"}>
                <NavItem icon={<SettingsIcon/>} acetone square active={action==="settings"}>
                    <Tooltip title="Настройки" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>

            {/* <Link href={"/manage/gd/"+srvid+"/profile"}>
                <NavItem icon={<PersonIcon/>} acetone square active={action==="profile"}>
                    <Tooltip title="?Профиль игрока" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link> */}
            {/* {srv.tariffConfig.Logs && <Link href={"/manage/gd/"+srvid+"/actions"}>
                <NavItem icon={<ActionsIcon/>} acetone square active={action==="actions"}>
                    <Tooltip title="Действия" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>}
            {srv.tariffConfig.Shops && <Link href={"/manage/gd/"+srvid+"/store"}>
                <NavItem icon={<StoreIcon/>} acetone square active={action==="store"}>
                    <Tooltip title="Мои магазины" placement="right" arrow open><span /></Tooltip>
                </NavItem>
            </Link>} */}
        </SideBar>
    ):(<></>)
}
