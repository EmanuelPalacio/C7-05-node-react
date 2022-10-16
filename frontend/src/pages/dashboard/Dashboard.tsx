/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import DashboardOrder from './components/DashboardOrder';
import styles from './styles/dashboard.module.css';
/* redux */
import { Turn } from '../../models/turns.type';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeTurn, setTurns } from '../../redux/slices/turnsSlice';
import { activesTurnsService, deleteTurnService, turnUpdateService } from './services/turns';
import FormUpdateOrder from './components/FormUpdateOrder';
/* icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

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
                  <div>
                    <span>Turno:{order.turnId} </span>
                    <span>Tiempo restante: {order.estimatedTime}</span>
                  </div>
                  <div>
                    <button onClick={() => handleFinishTurn(order)} className={styles.orderButton} type='button'>
                      <FontAwesomeIcon icon={faCheck} /><span>Entregar</span>
                    </button>
                    <button onClick={() => {setIsUpdate({ isUpdate: true, order });}}
                      className={styles.orderButton}
                      type='button'
                    >
                      <FontAwesomeIcon icon={faPlus} /><span>sumar</span>
                    </button>
                    <button className={styles.orderButton} type='button' onClick={() => deleteOrden(order)}>
                      <FontAwesomeIcon icon={faTrash} /><span>eliminar</span>
                    </button>
                  </div>
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
