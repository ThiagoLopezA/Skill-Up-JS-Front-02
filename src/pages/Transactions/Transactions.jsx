import React, { useState } from "react";
import styles from "./Transactions.module.css";
import Balance from "../../Components/Balance/Balance";
import Button from "../../Components/Button/Button";
import TransactionContainer from "../../Components/Transaction/TransactionContainer";
import Chart from "./components/Chart/Chart";
import TransactionModal from "./components/TransferModal/TransferModal";
import { getTransactions } from "../../app/transactionSlice";
import { useSelector } from "react-redux";

export default function Transactions() {
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => setVisibility(!visibility);
  const { transactions } = useSelector(getTransactions);

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
