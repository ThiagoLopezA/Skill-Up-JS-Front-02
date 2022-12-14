import React from "react";
import styles from "./AsideNavbar.module.css";
import NavbarButton from "../NavbarButton/NavbarButton";
import Nav from "../Nav/Nav";

export default function AsideNavbar() {
  return (
    <section className={`${styles.menu_wrapper}`}>
      <div className={`${styles.menu}`}>
        <div className={`${styles.brand}`}>alkybank</div>
        <Nav />
      </div>
    </section>
  );
}
