import styles from "./Hero.module.scss"

const Hero = ({ children, img, showOverlay }) => {

    const imageHero = img || "https://images.unsplash.com/photo-1497990902153-c6d041aad676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80";

    return (
        <div className={styles.heroWrapper} style={{
            backgroundImage: `url(${imageHero})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            <div className={`${!showOverlay ? styles.heroOverlay : ''}`}>
                <div className={styles.heroContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Hero