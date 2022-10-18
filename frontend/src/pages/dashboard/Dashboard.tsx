/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react';
import DashboardOrder from './components/DashboardOrder';
import OrderInfo from './components/OrderInfo';
import styles from './styles/dashboard.module.css';
/* redux */
import { Turn } from '../../models/turns.type';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeTurn, setTurns } from '../../redux/slices/turnsSlice';
import { activesTurnsService, deleteTurnService, turnUpdateService } from './services/turns';
import FormUpdateOrder from './components/FormUpdateOrder';
/* icons */

const Dashboard = () => {
  // const [storage, setStorage] = useState<Turn[]>([]);
  // const getStorage = JSON.parse(localStorage.getItem('TURNS') || '[]');
  const [modal, setModal] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState({ isUpdate: false, order: {} as Turn });
  const listTurns = useAppSelector((state) => state.Turns);
  const dispatch = useAppDispatch();

  const activeModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
  }, []);

  const deleteOrden = (order: Turn) => {
    deleteTurnService(order.turnId).then((res) => {
      res && dispatch(removeTurn(order));
    });
  };

  const handleFinishTurn = (order: Turn) => {
    const dataUpdate = {
      is_active: false,
      turn_date: new Date(order.turnDate).toISOString(),
    };

    turnUpdateService(order.turnId, dataUpdate).then((res) => {
      res && dispatch(removeTurn(order));
    });
  };

  const handleSetUpdate = (order: Turn) => {
    setIsUpdate({ isUpdate: true, order });
  };

  useEffect(() => {
    activesTurnsService().then((turns) => {
      turns && dispatch(setTurns(turns));
    });
  }, []);

  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={`${styles.dashboardFilter}`}>
          <button onClick={activeModal} type='button'>
            Agregar pedido
          </button>
        </div>
        <div className={styles.dashboardBody}>
          <div className={styles.orderContainer}>
            <ul>
              {listTurns.map((order: Turn) => (
                <li key={order.turnId} className={styles.order}>
                  <OrderInfo order={order} handleFinishTurn={handleFinishTurn} setIsUpdate={handleSetUpdate} deleteOrder={deleteOrden} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isUpdate.isUpdate && (
        <FormUpdateOrder
          activeModal={() => {
            setIsUpdate({ isUpdate: false, order: {} as Turn });
          }}
          order={isUpdate.order}
        />
      )}
      {modal && <DashboardOrder activeModal={activeModal} />}
    </>
  );
};

export default Dashboard;
