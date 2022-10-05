import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountDown from './components/CountDown';
import ModalDialog from './components/ModalDialog';
import OrderFinished from './components/OrderFinished';
import styles from './styles/client.module.css';

export default function Client() {
  const [isOpen, setIsOpen] = useState(false);
  const [turn, setTurn] = useState(true);
  const [turnFinished, setTurnFinished] = useState(true);
  const { turnId } = useParams();

  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
    });
    return () => {
      window.removeEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
      });
    };
  }, []);

  return (
    <div className={styles.client_Container}>
      {turn ? (
        <>
          {turnFinished ? (
            <OrderFinished />
          ) : (
            <>
              <h2>Su orden estara lista en</h2>
              <CountDown />
            </>
          )}
          <div className={styles.client_turnInfo}>
            <p>
              <strong>Turno ID:</strong> {turnId}
            </p>
            <p>
              <strong>Numero de turno:</strong> 2
            </p>
          </div>
        </>
      ) : (
        <h2>Turno no encontrado</h2>
      )}

      {isOpen && <ModalDialog setIsOpen={setIsOpen} />}
    </div>
  );
}
