import ChartClient from './components/ChartClient'
import CompleteOrders from './components/CompletedOrders'
import styles from './styles/statistics.module.css'

const Statistics = () =>{
    return(
        <div className={styles.statisticsContainer}>
            <div className={`${styles.statistics}`} >
                <CompleteOrders/>
                <div className={`${styles.containerChart}`}>
                    {/* chartCliente tiene que tener un contenedor padre y no compartirlo con ningun otro compnente para que funcione correctamente */}
                    <ChartClient/>
                </div>
            </div>
        </div>
    )
}

export default Statistics
