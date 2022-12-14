import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ children, open, onClose }) {
  return (
    open && (
      <div className={styles.parent}>
        <div className={styles.wrapper} onClick={onClose}></div>
        <div className={styles.modal}>{children}</div>
      </div>
    )
  );
}
