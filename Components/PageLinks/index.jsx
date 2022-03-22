
import Link from 'next/link'
import styles from "./PageLinks.module.scss"

const PageLinks = ({ styleLinks }) => {

    const links = [
        {
            url: "/",
            text: "HOME"
        },
        {
            url: "/about",
            text: "ABOUT"
        },
        {
            url: "/contact",
            text: "CONTATTI"
        }
    ];

    return (
        <ul className={styleLinks}>
            {links.map((item, index) => (
                <Link href={item.url} key={index} >
                    <a className={styles.linkItem} >
                        <h5>{item.text}</h5>
                    </a>
                </Link>
            ))}
        </ul>

    )
}

export default PageLinks