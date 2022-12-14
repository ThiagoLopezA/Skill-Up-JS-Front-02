import React from "react";
import styles from "./Brand.module.css";

export default function Brand({ size = "sm" }) {
  return <div className={`${styles.brand} ${styles[size]}`}>alkybank</div>;
}
