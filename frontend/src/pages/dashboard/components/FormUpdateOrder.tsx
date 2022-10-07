import { Turn } from '@/models/turns.type';
import { useAppDispatch } from '@/redux/hooks';
import { addTurn } from '@/redux/slices/turnsSlice';
import React, { useEffect, useState } from 'react';
import { turnCreateService } from '../services/turns';
import styles from '../styles/formUpdate.module.css';
import { AddMinutestoDate } from '../utils/date.utils';

interface props {
  activeModal: () => void;
  order: Turn;
}

const FormUpdateOrder = ({ activeModal, order }: props) => {
  const [date, setDate] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [client, setClient] = useState({
    time: '5',
    table: 0,
  });
  const dispatch = useAppDispatch();
  console.log(order);
  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setClient({ ...client, [e.currentTarget.name]: e.currentTarget.value });
  };
  const onSubmitCreateTurn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (client.table === 0) return setErrorMessage('Ingresa una mesa');
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
      setModal(true);
      setErrorMessage('');
    }
  };
  const toggleModal = () => {
    activeModal();
  };

  useEffect(() => {
    setDate(new Date(order.turnDate).toLocaleTimeString());
  }, [order]);

  return (
    <>
      <div className={`${styles.window}`}>
        {!modal ? (
          <div className={`${styles.modal}`}>
            <button className={`${styles.modalButton}`} onClick={() => activeModal()}>
              X
            </button>
            <form onSubmit={onSubmitCreateTurn} className={`${styles.modalForm}`}>
              <input type='number' name='table' placeholder='Numero de mesa' onChange={handleChange} />
              <p>Tiempo estimado: {order.estimatedTime}</p>
              <p>Termina a las: {date}</p>
              <p>Seleccione los minutos que desea sumar a la orden</p>
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
              <button type='submit'>Actualizar orden</button>
              <span className={styles.errorMessage}>{errorMessage}</span>
            </form>
          </div>
        ) : (
          <div>
            <button className={styles.modalButton} onClick={toggleModal} type='button'>
              X
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default FormUpdateOrder;
