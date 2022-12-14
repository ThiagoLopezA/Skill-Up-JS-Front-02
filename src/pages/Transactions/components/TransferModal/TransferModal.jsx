import React from "react";
import Modal from "../../../../Components/Modal/Modal";
import styles from "./TransferModal.module.css";
import OutcomeTransactionForm from "../../../../Components/Forms/TransactionForm/OutcomeTransactionForm";
import Button from "../../../../Components/Button/Button";

export default function TransferModal({ visibility, handleVisibility }) {
  return (
    <Modal open={visibility} onClose={handleVisibility}>
      <h2 className={styles.title}>Transferir a:</h2>
      <OutcomeTransactionForm action={handleVisibility} />
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
