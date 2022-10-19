import styles from '../styles/modals.module.css';
import QrImage from './QrImage';
interface props {
  toggleModal: () => void;
  id: string | number;
}
function QrModal({ id, toggleModal }: props) {
  return (
    <div className={`${styles.window}`}>
      <div>
        <button className={styles.modalButton} onClick={toggleModal} type='button'>
          X
        </button>
        <QrImage qrCode={id} />
      </div>
    </div>
  );
}

export default QrModal;
