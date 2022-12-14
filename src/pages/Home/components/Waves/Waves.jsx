import React from "react";
import styles from "./Waves.module.css";
export default function Waves() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.waves}
      viewBox="0 0 542 99"
    >
      <defs>
        <linearGradient id="ngbsq9d2va" x1="50%" x2="50%" y1="0%" y2="74.658%">
          <stop offset="0%" stop-color="#DEE7FD"></stop>
          <stop offset="100%" stop-color="#FAFAFA"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd" opacity=".3">
        <g fill="url(#ngbsq9d2va)" transform="translate(-281 -247)">
          <g>
            <path
              d="M75.885 183c32.17 0 53.865-16 93.27-16 39.406 0 53.912 16 101.845 16s49.813-16 98.84-16c49.026 0 58.463 16 108.16 16 33.132 0 54.465-5.333 64-16v98.14H0V167s43.717 16 75.885 16z"
              transform="translate(281 80) matrix(-1 0 0 1 542 0)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
