import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Chart from "./components/Chart/Chart";
import IncomeModal from "./components/IncomeModal/IncomeModal";
import TransactionContainer from "./components/Transaction/TransactionContainer";
import styles from "./Home.module.css";

export default function Home() {
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => setVisibility(!visibility);
  const transactions = [
    {
      id: 3,
      description: null,
      amount: "1000.00",
      date: "2022-12-14T12:37:22.000Z",
      userId: 23,
      toUserId: 23,
      categoryId: 1,
      createdAt: "2022-12-14T12:37:22.000Z",
      updatedAt: "2022-12-14T12:37:22.000Z",
      deletedAt: null,
      User: {
        firstName: "Thiago",
        lastName: "Lopez",
      },
    },
    {
      id: 4,
      description: null,
      amount: "1000.00",
      date: "2022-12-14T12:37:25.000Z",
      userId: 23,
      toUserId: 23,
      categoryId: 1,
      createdAt: "2022-12-14T12:37:25.000Z",
      updatedAt: "2022-12-14T12:37:25.000Z",
      deletedAt: null,
      User: {
        firstName: "Thiago",
        lastName: "Lopez",
      },
    },
    {
      id: 5,
      description: null,
      amount: "500.00",
      date: "2022-12-14T12:37:40.000Z",
      userId: 23,
      toUserId: 1,
      categoryId: 2,
      createdAt: "2022-12-14T12:37:40.000Z",
      updatedAt: "2022-12-14T12:37:40.000Z",
      deletedAt: null,
      User: {
        firstName: "Homero",
        lastName: "Simpson",
      },
    },
  ];
  const balance = "12555,00";
  return (
    <div className={`container-fluid`}>
      <div className="row">
        <div className={`col-12 col-md-6 ${styles.wrapper}`}>
          <div className={`${styles.balance}`}>
            <div>
              <h3 className={`${styles.title}`}>Tenés disponible</h3>
              <p className={`${styles.balanceNumber}`}>${balance}</p>
            </div>
            <div className="d-flex flex-column">
              <Button variant="outlined" handleClick={handleVisibility}>
                Cargar
              </Button>
            </div>
          </div>
          <div className={`${styles.transactions}`}>
            <h2 className={`${styles.transactionsTitle}`}>Movimientos</h2>
            {transactions.map((e, i) => {
              return <TransactionContainer transaction={e} key={e + i} />;
            })}
          </div>
        </div>
        <div className={`col-6 ${styles.chartArea} d-none d-md-flex`}>
          <h2 className={styles.title}>Análisis de gastos</h2>
          <div className={styles.analisisArea}>
            <div className={styles.chartContainer}>
              <Chart />
            </div>
            <div>
              <div className={styles.references}>
                <div className={`${styles.box} ${styles.incomeColor}`}></div>
                <p className={styles.subtitle}>Cargas (50%)</p>
              </div>
              <div className={styles.references}>
                <div className={`${styles.box} ${styles.outcomeColor}`}></div>
                <p className={styles.subtitle}>Transferencias (50%)</p>
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
