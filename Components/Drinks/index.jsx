import Drink from "../Drink"

import styles from "./Drinks.module.scss"

const Drinks = ({ drink }) => {
    return (
        <div className={styles.wrapper}>
            {drink?.map((item) => {
                return <Drink key={item.idDrink} {...item} />
            })}
        </div>
    )
}

export default Drinks