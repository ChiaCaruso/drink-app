
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

import styles from "./SocialLinks.module.scss"

const SocialLinks = () => {

    const social = [
        {
            url: "https://www.facebook.com/",
            icon: <BsFacebook className={styles.nav_icon} />
        },
        {
            url: "https://www.instagram.com/",
            icon: <FaInstagramSquare className={styles.nav_icon} />
        },
        {
            url: "https://twitter.com/",
            icon: <AiFillTwitterCircle className={styles.nav_icon} />
        },
    ];

    return (
        <ul className={styles.socialItem}>
            {social.map((item, index) => (
                <li key={index} className={styles.linkItem}>
                    <a href={item.url} alt={item.url}>
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default SocialLinks