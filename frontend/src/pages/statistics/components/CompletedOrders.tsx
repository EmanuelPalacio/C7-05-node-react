import axios from 'axios'
import styles from '../styles/statistics.module.css'
import {API_URL} from '../../../utils/config'
import { ApiTurns} from '../../../models/turns.type'
import { turnAdapter } from '../adapter/turns.adapter'
import { useEffect } from 'react'
/* redux */
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { setShifts } from '@/redux/slices/completedShifts'


const CompleteOrders = () => {
  const listTurns = useAppSelector((state) => state.completedShifts);
  const dispatch = useAppDispatch();
  const fetch = async() =>{
    const data = await axios.get<ApiTurns>(`${API_URL}/turns`)
    const list = data.data.turnsRetrieved.turnsRetrieved
    const array = (list.filter(active => active.is_active === false)).map((e)=> turnAdapter(e))
    dispatch(setShifts([...array]))
  }
  useEffect(()=>{
    fetch()
  },[])
  return(
    <div className={styles.CompletedOrders}>
            <ul>
              {listTurns.map((order) => (
                <li key={order.turnId}>
                    <p>ID {order.turnId} </p>
                    <p>Tiempo:{order.estimatedTime}</p>
                    <p>fecha:{(order.turnDate).substring(0,10)}</p>
                </li>
              ))}
            </ul>
        </div>
  )
}
export default CompleteOrders;