
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import { globalContext } from '../../Tools/context'

import PageLinks from '../PageLinks'

import styles from "./Navbar.module.scss"


const Navbar = () => {

    const { showSidebar } = globalContext();

    return (
        <nav className={styles.navbar}>
            <Link href='/' >
                <h3 className={styles.logo}>Drink App</h3>
            </Link>
            <PageLinks styleLinks={styles.listItems} />
            <button className={`${styles.resp_btn} ${styles.btn} ${styles.btn_toggle}`} onClick={showSidebar} >
                <FiMenu className={styles.nav_icon} />
            </button>

        </nav>
    )

}

export default Navbar

