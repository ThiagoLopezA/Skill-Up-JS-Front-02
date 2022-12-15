import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalanceFromUser, getBalance } from "../../app/transactionSlice";
import jwtDecode from "jwt-decode";

import styles from "./Balance.module.css";
export default function Balance({ children }) {
  const balance = useSelector(getBalanceFromUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBalance());
  }, []);

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
