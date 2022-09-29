import CountDown from './components/CountDown';
import styles from './styles/client.module.css';
import { useParams } from 'react-router-dom';

export default function Client() {
  const { turnId } = useParams();

  return (
    <div className={styles.client_Container}>
      <h2>Su orden estara lista en</h2>
      <CountDown />
      <div className={styles.client_turnInfo}>
        <p>
          <strong>Turno ID:</strong> {turnId}
        </p>
        <p>
          <strong>Numero de turno:</strong> 2
        </p>
      </div>
    </div>
  );
}
