import React from "react";
import styles from "./Button.module.css";

export default function Button({
  handleClick,
  children,
  type,
  variant,
  size = "sm",
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      className={`mb-2 ${styles.btn} ${styles[variant]} ${styles[size]} ${
        fullWidth ? styles.fullWidth : null
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

// variant : outlined, primary, secondary
