import React, { useState } from 'react';
import DashboardOrder from './DashboardOrder';
import styles from './styles/dashboard.module.css';

const Dashboard: React.FC = () => {

  const [orders,setOrders] = useState([
    {orderId:1,tiempo:15},
    {orderId:2,tiempo:15},
    {orderId:3,tiempo:15},
    {orderId:5,tiempo:15},
    {orderId:6,tiempo:15},
    {orderId:7,tiempo:15},
    {orderId:8,tiempo:15},
  ])

  const addOrder = () => {
    setOrders(orders.concat({orderId:orders.length+1,tiempo:15}));
    
  }

  return (
    <>
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <a className={`${styles.dashboardLink} ${styles.dashboardLinkActive}`}>Historial de pedidos</a>
        <a className={`${styles.dashboardLink}`}>Finalizados</a>
      </div>
      <div className={`${styles.dashboardFilter}`}>
        <button onClick={addOrder} type='button' >Agregar pedido</button>
      </div>
      <div className={styles.dashboardBody}>
        <div className={styles.orderContainer}>
          <ul>
            {
              orders.map( (order) => 
              <li key={order.orderId} className={styles.order}>
                <span>Orden número:{order.orderId} </span>
                <span>Tiempo restante: {order.tiempo}</span>
                <button className={styles.orderButton} type='button'>Entregar</button>
                <button className={styles.orderButton} type='button'>+</button>
                <button className={styles.orderButton} type='button'>x</button>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>

    <DashboardOrder/>
    </>
  );
};


export default Dashboard;
