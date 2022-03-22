import axios from 'axios'
import Link from 'next/link'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"

import Layout from "../../../Components/Layout"

import styles from "./index.module.scss"

const Cocktail = ({ drink }) => {

    const strInstructionsList = [
        { istruzione: drink.strIngredient1, qty: drink.strMeasure1 },
        { istruzione: drink.strIngredient2, qty: drink.strMeasure2 },
        { istruzione: drink.strIngredient3, qty: drink.strMeasure3 },
        { istruzione: drink.strIngredient4, qty: drink.strMeasure4 },
        { istruzione: drink.strIngredient5, qty: drink.strMeasure5 },
    ];

    return (
        <Layout>
            <div className={styles.main}>
                <header>
                    <Link href="/">
                        <BsFillArrowLeftCircleFill className={styles.icon} />
                    </Link>
                    <h4>Torna alla Home</h4>
                </header>

                <section>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <div className={styles.text}>
                        <div className={styles.text_details}>
                            <h2>{drink.strDrink}</h2>
                            <div className={styles.text_details_label}>
                                <p>{drink.strAlcoholic}</p>
                                <p>{drink.strCategory}</p>
                                <p>{drink.strGlass}</p>
                            </div>
                        </div>

                        <hr />

                        <div className={styles.text_description}>
                            <h4>Ingredienti:</h4>
                            <ul className={styles.list}>
                                {
                                    strInstructionsList.map((item, index) => {
                                        if (item.istruzione) {
                                            return <li key={index}>
                                                <p className={styles.info}>
                                                    ◇ {item.qty} {item.istruzione}
                                                </p>
                                            </li>
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <hr />

                        <div className={styles.text_description}>
                            <h4>Istruzioni:</h4>
                            <p className={styles.info}>
                                {drink.strInstructionsIT ? drink.strInstructionsIT : drink.strInstructions}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

Cocktail.getInitialProps = async (ctx) => {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ctx.query.id}`);

    return {
        drink: response.data.drinks[0],
    }
}

export default Cocktail