import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import Chart from "./components/Chart/Chart";
import IncomeModal from "./components/IncomeModal/IncomeModal";
import TransactionContainer from "../../Components/Transaction/TransactionContainer";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { getUserFromLocalStorage } from "../../app/authSlice";
import { getAllUserTransactions } from "../../app/transactionSlice";
import { getTransactions } from "../../app/transactionSlice";
import { useSelector } from "react-redux";
import Balance from "../../Components/Balance/Balance";

export default function Home() {
  const { transactions } = useSelector(getTransactions);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserFromLocalStorage());
    dispatch(getAllUserTransactions());
  }, []);

  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => setVisibility(!visibility);

  const incomes = transactions
    .filter(e => e.categoryId === 1)
    .reduce((ac, e) => ac + parseInt(e.amount), 0);

  const outcomes = transactions
    .filter(e => e.categoryId === 2)
    .reduce((ac, e) => ac + parseInt(e.amount), 0);

  const data = [
    {
      name: "incomes",
      value: incomes,
      percentage: parseFloat((incomes * 100) / (incomes + outcomes)).toFixed(2),
    },
    {
      name: "outcomes",
      value: outcomes,
      percentage: parseFloat((outcomes * 100) / (incomes + outcomes)).toFixed(
        2
      ),
    },
  ];

  return (
    <div className={`container-fluid`}>
      <div className="row">
        <div className={`col-12 col-md-6 ${styles.wrapper}`}>
          <Balance>
            <Button variant="outlined" handleClick={handleVisibility}>
              Cargar
            </Button>
          </Balance>
          <div className={`${styles.transactions}`}>
            <h2 className={`${styles.title}`}>Movimientos</h2>

            {transactions.map((e, i) => {
              return <TransactionContainer transaction={e} key={e + i} />;
            })}
          </div>
        </div>
        <div className={`col-6 ${styles.chartArea} d-none d-md-flex`}>
          <h2 className={styles.title}>Análisis de cuenta</h2>
          <div className={styles.analisisArea}>
            <div className={styles.chartContainer}>
              <Chart data={data} />
            </div>
            <div>
              <div className={styles.references}>
                <div className={`${styles.box} ${styles.incomeColor}`}></div>
                <p className={styles.subtitle}>
                  Cargas {`(${data[0].percentage}%)`}
                </p>
              </div>
              <div className={styles.references}>
                <div className={`${styles.box} ${styles.outcomeColor}`}></div>
                <p className={styles.subtitle}>
                  Transferencias {`(${data[1].percentage}%)`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IncomeModal
        visibility={visibility}
        handleVisibility={handleVisibility}
      />
    </div>
  );
}
