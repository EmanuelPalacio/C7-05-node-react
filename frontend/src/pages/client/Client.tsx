import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setTurn } from '@/redux/slices/clientTurnSlice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as onesignal from './services/onesignal';
import CountDown from './components/CountDown';
import ModalDialog from './components/ModalDialog';
import OrderFinished from './components/OrderFinished';
import { turnService } from './services/turn';
import styles from './styles/client.module.css';
import IgLogo from '@/components/svg/IgLogo';
import TwitterLogo from '@/components/svg/TwitterLogo';
import FbLogo from '@/components/svg/FbLogo';

export default function Client() {
  const [isOpen, setIsOpen] = useState(false);
  const [turnFinished, setTurnFinished] = useState<any>(false);
  const { turnId } = useParams();
  const dispatch = useAppDispatch();
  const turn = useAppSelector((state) => state.ClientTurn);

  useEffect(() => {
    const handleTabClose = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return (event.returnValue = 'Are you sure you want to exit?');
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  useEffect(() => {
    turnId &&
      turnService(turnId).then((turn) => {
        turn && dispatch(setTurn(turn));
      });
  }, []);

  useEffect(() => {
    onesignal.runOneSignal().then((id) => {
      id && turnId && onesignal.registerNotificationId(turnId, id);
    });
  }, []);

  return (
    <>
      {turn.isActive ? (
        <div className={styles.client_Container}>
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
              <strong>Turno ID:</strong> {turn?.turnId}
            </p>
            <p>
              <strong>Hora estimada:</strong> {new Date(turn.turnDate).toLocaleTimeString()}
            </p>
          </div>
          <footer>
            <span>Siguenos en:</span>
            <div className={styles.clientRRSS}>
              <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                <IgLogo svgProp={{ width: 30, height: 30 }} />
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
                <TwitterLogo svgProp={{ width: 30, height: 30 }} />
              </a>
              <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                <FbLogo svgProp={{ width: 30, height: 30 }} />
              </a>
            </div>
          </footer>
        </div>
      ) : (
        <></>
      )}

      {isOpen && <ModalDialog setIsOpen={setIsOpen} />}
    </>
  );
}
