import axios from 'axios'
import styles from '../styles/statistics.module.css'
import {API_URL} from '../../../utils/config'
import { ApiTurns} from '../../../models/turns.type'
import { turnAdapter } from '../adapter/turns.adapter'
import { useEffect } from 'react'
/* redux */
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { setTurns } from '@/redux/slices/turnsSlice'


const CompleteOrders = () => {
  const listTurns = useAppSelector((state) => state.Turns);
  const dispatch = useAppDispatch();
  const fetch = async() =>{
    const data = await axios.get<ApiTurns>(`${API_URL}/turns`)
    const list = data.data.turnsRetrieved.turnsRetrieved
    const array = (list.filter(active => active.is_active === false)).map((e)=> turnAdapter(e))
    dispatch(setTurns([...array,
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-12-12T11:20:50.406Z',turnId: 100},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-12-12T11:20:50.406Z',turnId: 101},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-11-12T11:20:50.406Z',turnId: 102},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-11-12T11:20:50.406Z',turnId: 103},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-11-12T11:20:50.406Z',turnId: 104},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-11-12T11:20:50.406Z',turnId: 105},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-11-12T11:20:50.406Z',turnId: 106},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-10-12T11:20:50.406Z',turnId: 107},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-10-12T11:20:50.406Z',turnId: 108},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-10-12T11:20:50.406Z',turnId: 109},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-10-12T11:20:50.406Z',turnId: 110},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-09-12T11:20:50.406Z',turnId: 111},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-09-12T11:20:50.406Z',turnId: 113},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-08-12T11:20:50.406Z',turnId: 114},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-07-12T11:20:50.406Z',turnId: 115},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-06-12T11:20:50.406Z',turnId: 116},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-06-12T11:20:50.406Z',turnId: 117},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-05-12T11:20:50.406Z',turnId: 118},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-05-12T11:20:50.406Z',turnId: 119},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-05-12T11:20:50.406Z',turnId: 120},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-05-12T11:20:50.406Z',turnId: 121},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-05-12T11:20:50.406Z',turnId: 122},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-05-12T11:20:50.406Z',turnId: 123},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-05-12T11:20:50.406Z',turnId: 124},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-04-12T11:20:50.406Z',turnId: 125},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-04-12T11:20:50.406Z',turnId: 126},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-04-12T11:20:50.406Z',turnId: 127},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-04-12T11:20:50.406Z',turnId: 128},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-03-12T11:20:50.406Z',turnId: 129},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-02-12T11:20:50.406Z',turnId: 130},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-02-12T11:20:50.406Z',turnId: 131},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-02-12T11:20:50.406Z',turnId: 132},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-02-12T11:20:50.406Z',turnId: 133},
      {estimatedTime: '5 min',foodId: null,isActive: false,notificationId: null,totalTime: 1665573650406,turnDate: '2022-01-12T11:20:50.406Z',turnId: 134},
    ]))
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