import { useEffect, useState } from 'react';
import DashboardOrder from './components/DashboardOrder';
import styles from './styles/dashboard.module.css';
/* redux */
import { Turn } from '../../models/turns.type';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeTurn, storageTurns } from '../../redux/slices/turnsSlice';

const Dashboard = () => {
  const [storage, setStorage] = useState<Turn[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const getStorage = JSON.parse(localStorage.getItem('TURNS') || '[]');
  const listTurns = useAppSelector((state) => state.Turns);
  const dispatch = useAppDispatch();

  const activeModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  const deleteOrden = (order: Turn) => {
    dispatch(removeTurn(order));
    /* Persistencia de datos */
    const newList = storage.filter((turn) => turn.turnId !== order.turnId);
    console.log(newList);
    localStorage.setItem('TURNS', JSON.stringify(newList));
    /* refrescar el storage del componente  */
    setStorage(newList);
  };
  useEffect(() => {
    setStorage(getStorage);
    dispatch(storageTurns(getStorage));
  }, []);

  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardHeader}>
          <a href='/dashboard' className={`${styles.dashboardLink} ${styles.dashboardLinkActive}`}>
            Historial de pedidos
          </a>
          <a href='/statistics' className={`${styles.dashboardLink}`}>
            Finalizados
          </a>
        </div>
        <div className={`${styles.dashboardFilter}`}>
          <button onClick={activeModal} type='button'>
            Agregar pedido
          </button>
        </div>
        <div className={styles.dashboardBody}>
          <div className={styles.orderContainer}>
            <ul>
              {listTurns.map((order) => (
                <li key={order.turnId} className={styles.order}>
                  <div>
                    <span>ID {order.turnId} </span>
                    <span>Tiempo: {order.estimatedTime}</span>
                    <span>N° mesa:{order.isActive}</span>
                  </div>
                  <div>
                    <button className={styles.orderButton} type='button'>
                      Entregar
                    </button>
                    <button className={styles.orderButton} type='button'>
                      +
                    </button>
                    <button className={styles.orderButton} type='button' onClick={() => deleteOrden(order)}>
                      x
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {modal && <DashboardOrder activeModal={activeModal} />}
    </>
  );
};

export default Dashboard;
