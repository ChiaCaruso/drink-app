
import SocialLinks from "../SocialLinks";
import { globalContext } from "../../Tools/context"

import styles from "./Footer.module.scss"

const Footer = () => {
    const prova = globalContext()
    console.log(prova)
    return (
        <footer className={styles.footer} >
            <div className={styles.footer_wrapper} >
                <h4>
                    all &copy; reserved to <span>Drink App</span>
                </h4>
                <SocialLinks />
            </div>
        </footer>

    )
}

export default Footer