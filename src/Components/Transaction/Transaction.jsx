import React from "react";
import styles from "./Transaction.module.css";

export default function Transaction({ type, title, amount, subtitle, date }) {
  return (
    <div className={styles.transactionWrapper}>
      <div className={styles.icon}>{type}</div>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.information}>
        <div className={styles.amount}>${amount}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
}
