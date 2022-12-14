import React from "react";
import styles from "./Balance.module.css";
export default function Balance({ children }) {
  const balance = "1000,00";
  return (
    <div className={`${styles.balance}`}>
      <div>
        <h3 className={`${styles.title}`}>Tenés disponible</h3>
        <p className={`${styles.balanceNumber}`}>${balance}</p>
      </div>
      <div className="d-flex flex-column">{children}</div>
    </div>
  );
}
