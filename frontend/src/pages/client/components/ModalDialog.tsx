import styles from '../styles/modalDialog.module.css';

interface IProps {
  setIsOpen: (isOpen: boolean) => void;
}

const ModalDialog = ({ setIsOpen }: IProps) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Estimado Cliente</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className={styles.modalContent}>Ha ocurrido unos imprevistos, su pedido demorara x tiempo más, pedimos disculpas.</div>

          <div className={styles.actionsContainer}>
            <button className={styles.confirmBtn} onClick={() => setIsOpen(false)}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDialog;
