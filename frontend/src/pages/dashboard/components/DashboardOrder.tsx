import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QrImage from './QrImage';
import styles from '../styles/modals.module.css';
import { Turn } from '../../../models/turns.type';

interface props {
  activeModal: () => void;
  addTurn: (object: Turn) => void;
}

const DashboardOrder = ({ activeModal, addTurn }: props) => {
  const [modal, setModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [client, setClient] = useState({
    time: '5',
    table: 0,
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setClient({ ...client, [e.currentTarget.name]: e.currentTarget.value });
    console.log(client);
  };
  const onSubmitCreateTurn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (client.table === 0) return setErrorMessage('Ingresa una mesa');

    // addTurn(client);
    console.log(client);
    // setModal(true);
  };
  const toggleModal = () => {
    activeModal();
  };
  /*     const getID =async () => {
        const data = await axios.get('https://www.uuidtools.com/api/generate/v1')
        console.warn(data.data[0].substring(0,8))
        setClient({
            ...client, id:data.data[0].substring(0,8)
        })
    }
    useEffect(()=>{ 
            getID()
    },[]) */

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
            </form>
            <span>{errorMessage}</span>
          </div>
        ) : (
          <div>
            <button className={styles.modalButton} onClick={toggleModal} type='button'>
              X
            </button>
            <QrImage qrCode={client.id} />
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardOrder;
