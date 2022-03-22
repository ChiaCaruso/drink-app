import Link from 'next/link'
import { globalContext } from '../../Tools/context'
import { AiOutlineClose } from 'react-icons/ai'

import PageLinks from "../PageLinks"

import styles from "./Sidebar.module.scss"

const Sidebar = () => {
    const { openSidebar, hideSidebar } = globalContext();
    return (
        <div className={`${openSidebar ? styles.showSidebar : styles.sidebar}`}>
            <div className={styles.header}>
                <Link href='/' >
                    <h3 className={styles.logo} onClick={hideSidebar}>Drink App</h3>
                </Link>
                <button className={`${styles.resp_btn} ${styles.btn} ${styles.btn_toggle}`} onClick={hideSidebar} >
                    <AiOutlineClose className={styles.nav_icon} />
                </button>
            </div>
            <div className={styles.wrapperMenu}>
                <PageLinks styleLinks={styles.sidebarLinks} onClick={hideSidebar} />
            </div>
        </div>
    )
}

export default Sidebar;