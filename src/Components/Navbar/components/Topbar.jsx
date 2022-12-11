import React from "react";
import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <section
      className={`container-fluid ${styles.topbar} d-flex justify-content-between`}
    >
      <button></button>
      <div className={`${styles.brand}`}>Alkybank</div>
      <button></button>
    </section>
  );
}
