import { useState } from 'react'
import ChartClient from './components/ChartClient'
import ChartRating from './components/ChartRating'
import CompleteOrders from './components/CompletedOrders'
import styles from './styles/statistics.module.css'

const Statistics = () =>{
    const [chart,setChart]= useState<boolean>(true)
    const handleRating = () =>{
        setChart(false)
    }
    const handleClient = () =>{
        setChart(true)
    }


    return(
        <div className={styles.statisticsContainer}>
            <div className={styles.statisticsButtons}>
                <button onClick={handleClient}>Personas por mes</button>
                <button onClick={handleRating}>Calificaciones</button>
            </div>
            <div className={`${styles.statistics}`}>
                <div className={`${styles.containerChart}`}>
                    {chart ? <ChartClient/> : <ChartRating/>}
                </div>
                <CompleteOrders/>
            </div>
        </div>
    )
}

export default Statistics
