import React from "react";

import styles from "./Burger.css";
import BurgerIngridient from "./BurgerIngridients/BurgerIngridient";

const burger = props => {
  let transformedIngridients = Object.keys(props.ingridients)
    .map(igKey => {
      return [...Array(props.ingridients[igKey])].map((_, i) => (
        <BurgerIngridient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (!transformedIngridients.length) {
    transformedIngridients = <p>Please start adding ingridients</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformedIngridients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
