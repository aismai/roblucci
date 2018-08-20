import React from "react";

import styles from "./Burger.css";
import BurgerIngridient from "./BurgerIngridients/BurgerIngridient";

const burger = () => {
  return (
    <div className={styles.Burger}>
      <BurgerIngridient type="bread-top" />
      <BurgerIngridient type="cheese" />
      <BurgerIngridient type="meat" />
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
