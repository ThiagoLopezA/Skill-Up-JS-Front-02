import React, { useState } from "react";
import styles from "./Transactions.module.css";
import Balance from "../../Components/Balance/Balance";
import Button from "../../Components/Button/Button";
import TransactionContainer from "../../Components/Transaction/TransactionContainer";
import Chart from "./components/Chart/Chart";
import TransactionModal from "./components/TransferModal/TransferModal";

export default function Transactions() {
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
    {
      id: 5,
      description: null,
      amount: "250.00",
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
    {
      id: 5,
      description: null,
      amount: 1500.0,
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
    {
      id: 5,
      description: null,
      amount: 17500.0,
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
  const filtered = transactions.filter(e => e.categoryId === 2);
  return (
    <div className={`container-fluid`}>
      <div className="row">
        <div className={`col-12 col-md-6 ${styles.wrapper}`}>
          <Balance>
            <Button variant="outlined" handleClick={handleVisibility}>
              Transferir
            </Button>
          </Balance>
          <div className={`${styles.transactions}`}>
            <h2 className={`${styles.title}`}>Transacciones</h2>
            {filtered.map((e, i) => {
              return <TransactionContainer transaction={e} key={e + i} />;
            })}
          </div>
        </div>
        <div className={`col-6 ${styles.chartArea} d-none d-md-flex`}>
          <h2 className={styles.title}>Análisis de gastos</h2>
          <div className={styles.chartContainer}>
            <Chart data={filtered} />
          </div>
        </div>
      </div>
      <TransactionModal
        visibility={visibility}
        handleVisibility={handleVisibility}
      />
    </div>
  );
}
