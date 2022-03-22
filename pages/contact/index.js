import { useState } from "react"
import { AppProvider } from "../../Tools/context"

import Layout from "../../Components/Layout"
import Modale from "../../Components/Modale"
import Hero from "../../Components/Hero"
import hero from "./contact.png"

import styles from "./index.module.scss"

export default function Contact() {

    const [showModal, setShowModal] = useState(false);

    const handleModal = (e) => {
        e.preventDefault();
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 4000)
    }

    return (
        <AppProvider>
            <Layout>
                <Hero img={hero.src} showOverlay>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <h2>Aggiungi il tuo cocktail!</h2>
                            <h4>Siamo sempre alla ricerca di nuove ricette per arricchire il nostro database!<br />
                                Inviaci la tua, il nostro team è pronto ad assaggiarla!</h4>
                        </div>

                        <div className={styles.wrapper_form}>
                            <form className={styles.form}>
                                <div className={styles.form_input}>
                                    <label htmlFor="nome">NOME</label>
                                    <input type="text" id="nome" name="nome" />
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="cognome">COGNOME</label>
                                    <input type="text" id="cognome" name="cognome" />
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                                <div className={styles.form_input}>
                                    <label htmlFor="ricetta">LA TUA RICETTA</label>
                                    <textarea id="ricetta" name="ricetta" />
                                </div>
                                <button type="submit" className={styles.btn} onClick={handleModal}>Invia</button>
                                {showModal && <Modale />}
                            </form>
                        </div>
                    </div>
                </Hero>
            </Layout>
        </AppProvider>
    )
}