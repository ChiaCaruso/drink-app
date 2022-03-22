import styles from "./Card.module.scss"

const Card = ({ title, subtitle, icon, text }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h4>{title}</h4>
                </div>
                {
                    subtitle ? (
                        <div className={styles.subtitle}>
                            <h6>{subtitle}</h6>
                        </div>
                    ) : (
                        <div className={styles.icon}>
                            {icon}
                        </div>
                    )
                }
                {text && <div className={styles.text}><p>{text}</p></div>}
            </div>
        </div>
    )
}

export default Card