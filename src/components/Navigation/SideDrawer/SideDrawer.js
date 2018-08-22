import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const sideDrawer = props => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
