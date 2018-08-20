import React from "react";

import styles from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(el => (
        <BuildControl
          key={el.label}
          label={el.label}
          added={() => props.ingridientAdded(el.type)}
          removed={() => props.ingridientRemoved(el.type)}
          disabled={props.disabled[el.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;
