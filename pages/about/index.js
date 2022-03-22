import { RiPlantFill } from "react-icons/ri"
import { IoSchool } from "react-icons/io5"
import { GiLovers } from "react-icons/gi"

import Layout from "../../Components/Layout"
import Hero from "../../Components/Hero"
import Card from "../../Components/Card"

import styles from "./index.module.scss"

export const card = [
    {
        title: "Crescita",
        icon: <RiPlantFill className={styles.icon} />,
        text: "Nati da una piccola startup il nostro obiettivo resta comunque l'espansione e conquistare il mondo con i nostri spettacolari cocktails!"
    },
    {
        title: "Supporto",
        icon: <IoSchool className={styles.icon} />,
        text: "Un progetto di espansione non può avvenire senza la crescita e la formazione di un team che sia sempre aggiornato sul cocktail del momento."
    },
    {
        title: "Passione",
        icon: <GiLovers className={styles.icon} />,
        text: "La passione è la forza che muove il nostro progetto fin dalle origini, e grazie anche al duro lavoro andiamo avanti verso nuove sfide!"
    }
]

export default function About() {
    return (
        <Layout>
            <Hero img={"https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80"}>
                <section className={styles.hero_wrapperText}>
                    <div className={styles.text}>
                        <h3>
                            <q>L&apos;alcol è un liquido prezioso: conserva tutto, tranne i segreti.</q>
                            <cite> Cary Grant</cite>
                        </h3>
                    </div>
                </section>
            </Hero>
            <section className={styles.wrapperCard}>
                <h3>I NOSTRI OBIETTIVI</h3>
                <div className={styles.sectionCard}>
                    {
                        card.map((item, index) => (
                            <Card key={index} {...item} />
                        ))
                    }
                </div>
            </section>
        </Layout>
    )
}
