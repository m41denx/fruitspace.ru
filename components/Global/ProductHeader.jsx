
import styles from './ProductHeader.module.css'
import Image from "next/image";
import {Button} from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import StorageIcon from '@mui/icons-material/Storage';
import Link from "next/link";


export default function ProductHeader({title, text, img, primaryText, secondaryText, primaryLink, secondaryLink}) {

    return (
        <div className={styles.productBox}>
            <Image src={img} fill="object-fit" objectFit="cover" layout="fill" quality={100}/>
            <div className={styles.textbox}>
                <h1>{title}</h1>
                <p>{text}</p>
                <div className={styles.cardBox}>
                    <Link href={primaryLink||"#"} legacyBehavior>
                        <Button variant="contained" className={styles.cardButton} startIcon={<BoltIcon/>}>
                            {primaryText}
                        </Button>
                    </Link>
                    {secondaryText &&
                        <Link href={secondaryLink||'#'} legacyBehavior>
                            <Button variant="contained" className={styles.cardSecondaryButton} startIcon={<StorageIcon/>}>
                                {secondaryText}
                            </Button>
                        </Link>}
                </div>
            </div>
        </div>
    );
}