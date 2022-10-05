import CountDown from './components/CountDown';
import styles from './styles/client.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

export default function Client() {
  const { turnId } = useParams();

  useEffect( ()=> {
    OneSignal.init({
      appId: '560e5ab2-9ceb-4379-8cef-545851f0b9e9',
      allowLocalhostAsSecureOrigin: false,
          // eslint-disable-next-line camelcase
          safari_web_id: 'web.onesignal.auto.2473987d-7114-4e84-8494-f768208d432f',
          notifyButton: {
            enable: true,
          },
    });
  },[])

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
