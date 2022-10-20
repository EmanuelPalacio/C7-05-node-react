import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addTurn } from '@/redux/slices/turnsSlice';
import React, { useEffect, useState } from 'react';
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
  const [finalEstimatedTime, setFinalEstimatedTime] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [client, setClient] = useState<{ time: string; categorie: number | string }>({
    time: '0',
    categorie: '',
  });
  const foods = useAppSelector((state) => state.Foods);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (foods.length > 0) {
      setClient({
        time: '0',
        categorie: foods[0].foodId.toString(),
      });
    }
  }, [foods]);

  useEffect(() => {
    const food = foods.find((food) => food.foodId === Number(client.categorie));
    if (food) {
      setFinalEstimatedTime(Number(client.time) + Number(food.estimatedTime));
    } else {
      setFinalEstimatedTime(Number(client.time));
    }
  }, [client]);

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setClient({ ...client, [e.currentTarget.name]: e.currentTarget.value });
  };
  const onSubmitCreateTurn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = new Date();
    const dateWithMins = AddMinutestoDate(currentDate, Number(finalEstimatedTime));

    const createData = {
      totalTime: dateWithMins.getTime(),
      estimatedTime: finalEstimatedTime + ' min',
      turnDate: dateWithMins.toISOString(),
      foodId: client.categorie,
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
              <input type='text' name='table' placeholder='Generar Pedido' readOnly />
              <div className={styles.divSelectContainer}>
                <strong>Agregar tiempo</strong>
                <select title='timeSelect' name='time' onChange={handleChange}>
                  <option value={0}> 0 min</option>
                  <option value={5}> 5 min</option>
                  <option value={10}>10 min</option>
                  <option value={15}>15 min</option>
                  <option value={20}>20 min</option>
                  <option value={25}>25 min</option>
                  <option value={30}>30 min</option>
                  <option value={35}>35 min</option>
                  <option value={40}>40 min</option>
                </select>
              </div>
              <div className={styles.divSelectContainer}>
                <strong>Categoría comida</strong>
                {foods.length > 0 ? (
                  <select title='categorie' name='categorie' onChange={handleChange}>
                    {foods.map((food) => (
                      <option key={food.foodId} value={food.foodId}>
                        {food.optionName}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Sin categorías creadas</p>
                )}
              </div>
              <span>
                <strong>Tiempo estimado:</strong> {finalEstimatedTime} min
              </span>
              <button type='submit'>Generar pedido</button>
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
