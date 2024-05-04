import GlobalHead from "../../components/GlobalHead";
import GlobalNav from "../../components/GlobalNav";
import styles from "../../components/Index.module.css";
import Footer from "../../components/Global/Footer";


export default function ProductIndex(props) {

    return (
        <>
            <GlobalHead title="Игровой хостинг"/>
            <GlobalNav />
            <div className={styles.main}>

            </div>
            <Footer router={props.router}/>
        </>
    )
}