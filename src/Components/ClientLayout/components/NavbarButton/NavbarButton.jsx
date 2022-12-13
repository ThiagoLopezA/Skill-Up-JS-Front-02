import React from "react";
import styles from "./NavbarButton.module.css";

export default function NavbarButton({ icon, children, active, handleClick }) {
  return (
    <button
      className={`${styles.button} ${active && styles.button_active}`}
      onClick={handleClick}
    >
      {icon}
      {children}
    </button>
  );
}
