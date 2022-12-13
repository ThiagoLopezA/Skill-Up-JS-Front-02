import React from "react";
import styles from "./Button.module.css";

export default function Button({
  handleClick,
  children,
  type,
  variant,
  size = "sm",
}) {
  return (
    <button
      type={type}
      class={`${styles.btn} ${styles[variant]} ${styles[size]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

// variant : outlined, primary, secondary
