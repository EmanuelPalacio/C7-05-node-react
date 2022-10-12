import axios from 'axios'
import styles from '../styles/statistics.module.css'
import {API_URL} from '../../../utils/config'
import {Turn, ApiTurns} from '../../../models/turns.type'
import { turnAdapter } from '../adapter/turns.adapter'
import { useEffect, useState } from 'react'


const CompleteOrders = () => {
  const [list,setList] = useState<Array<Turn>>([])
  const fetch = async() =>{
    const data = await axios.get<ApiTurns>(`${API_URL}/turns`)
    const hola = data.data.turnsRetrieved.turnsRetrieved
    console.log(hola)
    const array = hola.map((e)=> turnAdapter(e))
    console.log(array)
    setList(array)
  }
  useEffect(()=>{
    fetch()
  },[])
  return(
    <div className={styles.CompletedOrders}>
            <ul>
              {list.map((order) => (
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