import { useState } from 'react'
import { useRouter } from 'next/router'
import { FaCocktail } from 'react-icons/fa'

import { globalContext } from '../../Tools/context'

import styles from "./Drink.module.scss"

const Drink = ({ strDrinkThumb: img, idDrink: id, strDrink: name }) => {

    const { getScrollPosition } = globalContext();

    const history = useRouter();
    
    const [show, setShow] = useState(false);

    const positionDrink = (id) => {
        getScrollPosition(window.pageYOffset);
        history.push(`/cocktail/${id}`);
    }
    
    const showInfo = () => {
        setShow(true)
    }

    const hideInfo = () => {
        setShow(false)
    }

    return (
        <div className={styles.wrapper} onMouseEnter={showInfo} onMouseLeave={hideInfo}>
            <div className={styles.image} style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
            </div>

            <div className={`${styles.textShow} ${show ? styles.showInfo : ""}`}>
                <h5>{name}</h5>
                <div className={styles.btn} onClick={() => positionDrink(id)} >
                    <h5>Ricetta</h5>
                    <FaCocktail className={styles.icon} />
                </div>
            </div>

            <div className={styles.text}>
                <h5>{name}</h5>
                <div className={styles.btn} onClick={() => positionDrink(id)}>
                    <h5>Ricetta</h5>
                    <FaCocktail className={styles.icon} />
                </div>
            </div>
        </div>
    )
}

export default Drink