import { useAppDispatch } from '@/redux/hooks';
import { addTurn } from '@/redux/slices/turnsSlice';
import React, { useState } from 'react';
import { turnCreateService } from '../services/turns';
import styles from '../styles/modals.module.css';
import { AddMinutestoDate } from '../utils/date.utils';
import QrImage from './QrImage';

interface props {
  activeModal: () => void;
}

const DashboardOrder = ({ activeModal }: props) => {
  const [modal, setModal] = useState<boolean>(false);
  const [idQR, setIdQR] = useState<string | number>('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [client, setClient] = useState({
    time: '5',
    table: 0,
  });
  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setClient({ ...client, [e.currentTarget.name]: e.currentTarget.value });
  };
  const onSubmitCreateTurn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* if (client.table === 0) return setErrorMessage('Ingresa una mesa'); */
    const currentDate = new Date();

    const dateWithMins = AddMinutestoDate(currentDate, parseInt(client.time));

    const createData = {
      totalTime: dateWithMins.getTime(),
      estimatedTime: client.time + ' min',
      turnDate: dateWithMins.toISOString(),
    };

    const newTurn = await turnCreateService(createData);

    if (newTurn) {
      dispatch(addTurn(newTurn));
      setIdQR(newTurn.turnId);
      setModal(true);
      setErrorMessage('');
    }
  };
  const toggleModal = () => {
    activeModal();
  };

  return (
    <>
      <div className={`${styles.window}`}>
        {!modal ? (
          <div className={`${styles.modal}`}>
            <button className={`${styles.modalButton}`} onClick={() => activeModal()}>
              X
            </button>
            <form onSubmit={onSubmitCreateTurn} className={`${styles.modalForm}`}>
              <input type='text' name='table' placeholder='Generar Orden' readOnly/>
              <select title='timeSelect' name='time' onChange={handleChange}>
                <option value={5}> 5 min</option>
                <option value={10}>10 min</option>
                <option value={15}>15 min</option>
                <option value={20}>20 min</option>
                <option value={25}>25 min</option>
                <option value={30}>30 min</option>
                <option value={35}>35 min</option>
                <option value={40}>40 min</option>
              </select>
              <button type='submit'>Generar orden</button>
              <span className={styles.errorMessage}>{errorMessage}</span>
            </form>
          </div>
        ) : (
          <div>
            <button className={styles.modalButton} onClick={toggleModal} type='button'>
              X
            </button>
            <QrImage qrCode={idQR} />
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardOrder;
