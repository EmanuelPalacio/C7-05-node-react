import React, { useState } from 'react';
import DashboardOrder from './DashboardOrder';
import styles from './styles/dashboard.module.css';

interface order {
  orderId: string,
  tiempo: number,
  mesa: number,
}

const Dashboard: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [orders, setOrders] = useState<order[]>([])

  const activeModal = () => {
    modal ? setModal(false) : setModal(true);
  }
  const addOrder = (object:order) => {
    setOrders([...orders, object]);
  }


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
              orders.map( (order) => 
              <li key={order.orderId} className={styles.order}>
                <span>Orden número:{order.orderId} </span>
                <span>Tiempo restante: {order.tiempo}</span>
                <span>Tiempo restante: {order.mesa}</span>
                <button className={styles.orderButton} type='button'>Entregar</button>
                <button className={styles.orderButton} type='button'>+</button>
                <button className={styles.orderButton} type='button'>x</button>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>

    {modal && <DashboardOrder activeModal={activeModal} orden={addOrder}/>}
    </>
  );
};


export default Dashboard;
