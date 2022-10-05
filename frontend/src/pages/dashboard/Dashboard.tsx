import React, { useEffect, useState } from 'react';
import DashboardOrder from './components/DashboardOrder';
import styles from './styles/dashboard.module.css';
/* redux */
import {useAppDispatch,useAppSelector} from '../../redux/hooks';
import {addTurn,removeTurn} from '../../redux/slices/turnsSlice';
import {Turn} from '../../models/turns.type';


const Dashboard = () => {
  const listTurns = useAppSelector((state)=> state.Turns)
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState<boolean>(false)

  const activeModal = () => {
    modal ? setModal(false) : setModal(true);
  }
  const addOrder = (object:Turn) => {
    dispatch(addTurn(object))
  }
  const deleteOrden = (order:Turn)=>{
    dispatch(removeTurn(order))
  }
useEffect(()=>{
  console.log(listTurns)
},[listTurns])

  return (
    <>
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <a className={`${styles.dashboardLink} ${styles.dashboardLinkActive}`}>Historial de pedidos</a>
        <a className={`${styles.dashboardLink}`}>Finalizados</a>
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
