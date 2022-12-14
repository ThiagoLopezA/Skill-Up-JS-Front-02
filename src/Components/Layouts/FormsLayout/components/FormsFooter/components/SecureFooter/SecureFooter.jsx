import React from "react";
import styles from "./SecureFooter.module.css";
export default function LoginFooter() {
  return (
    <div className={styles.footer}>
      <svg
        width="1em"
        height="1em"
        className={styles.icon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        font-size="24"
      >
        <defs>
          <path
            d="M11.987 18.648V11.75H7.221a18.237 18.237 0 01-.522-3.845c2.054-.398 4.24-2.061 5.274-2.933l.014.01v6.768h4.709c-1.176 4.126-3.708 6.212-4.709 6.897M18.157 6.3c-1.89 0-4.691-2.22-5.61-3.074a.84.84 0 00-1.148 0C10.483 4.082 7.696 6.3 5.843 6.3A.844.844 0 005 7.146c0 10.362 6.374 13.174 6.647 13.288a.842.842 0 00.727-.035C12.644 20.253 19 16.707 19 7.146a.844.844 0 00-.843-.846"
            id="SecurityIcon_41916383649617517_a"
          ></path>
        </defs>
        <use
          fill="currentColor"
          xlinkHref="#SecurityIcon_41916383649617517_a"
          fill-rule="evenodd"
        ></use>
      </svg>
      <div>
        <h5 className={styles.footerTitle}>Sentite seguro con Alkibank.</h5>
        <p className={styles.footerText}>
          Nunca compartas tus datos personales, claves y números de tarjetas con
          nadie.
        </p>
      </div>
    </div>
  );
}
