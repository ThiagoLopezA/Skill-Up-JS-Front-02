import React from "react";
import Modal from "../../../../Components/Modal/Modal";
import TransactionForm from "../../../../Components/Forms/TransactionForm/TransactionForm";
import styles from "./IncomeModal.module.css";
import IncomeTransactionForm from "../../../../Components/Forms/TransactionForm/IncomeTransactionForm";
import Button from "../../../../Components/Button/Button";

export default function IncomeModal({ visibility, handleVisibility }) {
  return (
    <Modal open={visibility} onClose={handleVisibility}>
      <h2 className={styles.title}>Añadir mas saldo a la cuenta</h2>
      <IncomeTransactionForm action={handleVisibility} />
      <Button
        variant="secondary"
        size="md"
        fullWidth
        handleClick={handleVisibility}
      >
        Cancelar
      </Button>
    </Modal>
  );
}
