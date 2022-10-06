import React, { useEffect, useState } from 'react';
import DashboardOrder from './components/DashboardOrder';
import styles from './styles/dashboard.module.css';
/* redux */
import {useAppDispatch,useAppSelector} from '../../redux/hooks';
import {addTurn,removeTurn, storageTurns} from '../../redux/slices/turnsSlice';
import {Turn} from '../../models/turns.type';


const Dashboard = () => {
  const [storage, setStorage] = useState<Turn[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const getStorage = JSON.parse(localStorage.getItem('TURNS') || '[]')
  const listTurns = useAppSelector((state)=> state.Turns)
  const dispatch = useAppDispatch()
  
  const activeModal = () => {
    modal ? setModal(false) : setModal(true);
  }
  const addOrder = (object:Turn) => {
    dispatch(addTurn(object))
    /* Persistencia de datos */
    setStorage([...storage, object])
    localStorage.setItem('TURNS', JSON.stringify([...storage, object]))
  }
  const deleteOrden = (order:Turn)=>{
    dispatch(removeTurn(order))
    /* Persistencia de datos */
    const newList = storage.filter((turn) => turn.id !== order.id)
    console.log(newList)
    localStorage.setItem('TURNS', JSON.stringify(newList))
    /* refrescar el storage del componente  */
    setStorage(newList)
  }
  useEffect(()=>{
      setStorage(getStorage)
      dispatch(storageTurns(getStorage))

  },[])


  return (
    <>
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <a href='/dashboard' className={`${styles.dashboardLink} ${styles.dashboardLinkActive}`}>Historial de pedidos</a>
        <a href='/statistics' className={`${styles.dashboardLink}`}>Finalizados</a>
      </div>
      <div className={`${styles.dashboardFilter}`}>
        <button onClick={activeModal} type='button' >Agregar pedido</button>
      </div>
      <div className={styles.dashboardBody}>
        <div className={styles.orderContainer}>
          <ul>
            {
              listTurns.map( (order) => 
              <li key={order.id} className={styles.order}>
                <div>
                  <span>ID {order.id} </span>
                  <span>Tiempo: {order.time}</span>
                  <span>N° mesa:{order.table}</span>
                </div>
                <div>
                  <button className={styles.orderButton} type='button'>Entregar</button>
                  <button className={styles.orderButton} type='button'>+</button>
                  <button className={styles.orderButton} type='button' onClick={()=> deleteOrden(order)}>x</button>
                </div>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>

    {modal && <DashboardOrder activeModal={activeModal} addTurn={addOrder}/>}
    </>
  );
};


export default Dashboard;
