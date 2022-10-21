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
import useSuscribeToEvent from '@/hooks/useSuscribeToEvent';
import { API_URL } from '@/utils/config';
import { turnAdapter } from './adapter/turn.adapter';

export default function Client() {
  const [isOpen2, setisOpen2] = useState(false);
  const [turnFinished, setTurnFinished] = useState<boolean>(false);
  const { turnId } = useParams<string>();
  const dispatch = useAppDispatch();
  const turn = useAppSelector((state) => state.ClientTurn);
  const [message] = useSuscribeToEvent(`${API_URL}/turns/${turnId}`);

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
    if (message) {
      if (message.delete) {
        dispatch(setTurn({ ...turn, isActive: false }));
      }

      const normalizedMessage = turnAdapter(message);
      if (normalizedMessage.totalTime) {
        const newTurn = {
          ...turn,
          totalTime: normalizedMessage.totalTime,
          turnDate: normalizedMessage.turnDate,
          estimatedTime: normalizedMessage.estimatedTime,
        };

        dispatch(setTurn(newTurn));
      }

      if (normalizedMessage.isActive === false) setTurnFinished(true);
    }
  }, [message]);

  useEffect(() => {
    console.log(`${window.location.origin}/client/${turnId}`);
    onesignal.runOneSignal().then(async (id) => {
      if (turnId) {
        await onesignal.showPrompt(turnId);
      }
      if (id && turnId) {
        onesignal.registerNotificationId(turnId, id);
      }
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
              <h2>Su pedido estará listo en</h2>
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
            <span>Síguenos en:</span>
            <div className={styles.clientRRSS}>
              <a href='https://www.instagram.com' title='Instagram link' target='_blank' rel='noreferrer noopener'>
                <IgLogo svgProp={{ width: 30, height: 30 }} />
              </a>
              <a href='https://www.twitter.com' title='Twitter link' target='_blank' rel='noreferrer noopener'>
                <TwitterLogo svgProp={{ width: 30, height: 30 }} />
              </a>
              <a href='https://www.facebook.com' title='Facebook link' target='_blank' rel='noreferrer noopener'>
                <FbLogo svgProp={{ width: 30, height: 30 }} />
              </a>
            </div>
          </footer>
        </div>
      ) : (
        <></>
      )}

      {isOpen2 && <ModalDialog setIsOpen={setisOpen2} />}
    </>
  );
}
