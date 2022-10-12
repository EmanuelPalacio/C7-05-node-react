/* eslint-disable camelcase */
import { Turn } from '@/models/turns.type';
import { useAppDispatch } from '@/redux/hooks';
import { updateTurn } from '@/redux/slices/turnsSlice';
import React, { useEffect, useState } from 'react';
import { turnUpdateService } from '../services/turns';
import styles from '../styles/formUpdate.module.css';
import { AddMinutestoDate } from '../utils/date.utils';

interface props {
  activeModal: () => void;
  order: Turn;
}

const FormUpdateOrder = ({ activeModal, order }: props) => {
  const [date, setDate] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const [client, setClient] = useState({
    time: '5',
    table: 0,
  });
  const dispatch = useAppDispatch();
  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setClient({ ...client, [e.currentTarget.name]: e.currentTarget.value });
  };
  const onSubmitUpdateTurn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { time } = client;
    const dateUpdate = AddMinutestoDate(new Date(order.turnDate), parseInt(time));

    const [minNumber] = order.estimatedTime.split(' ');
    const updateEstimatedTime = parseInt(minNumber) + parseInt(time);

    const updateData = {
      total_time: dateUpdate.getTime(),
      estimated_time: updateEstimatedTime + ' min',
      turn_date: dateUpdate.toISOString(),
    };

    turnUpdateService(order.turnId, updateData).then((res) => {
      if (res) {
        const formatData = { ...order, totalTime: res.totalTime, estimatedTime: res.estimatedTime, turnDate: res.turnDate };
        dispatch(updateTurn(formatData));
        activeModal();
        setModal(true);
      }
    });
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
            <form onSubmit={onSubmitUpdateTurn} className={`${styles.modalForm}`}>
              <input type='number' name='table' placeholder='Generar Turno' onChange={handleChange} />
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
