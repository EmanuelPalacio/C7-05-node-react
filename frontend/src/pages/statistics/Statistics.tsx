import ChartClient from './components/ChartClient'
import styles from './styles/statitistics.module.css'

const Statistics = () =>{
    return(
        <div className={styles.statisticsContainer}>
            <div className={styles.header}>
                <a href='/dashboard' className={`${styles.headerLink} `}>Historial de pedidos</a>
                <a href='/statistics' className={`${styles.headerLink} ${styles.linkActive}`}>Finalizados</a>
            </div>
            <div className={`${styles.statistics}`} >
                <ChartClient/>
            </div>
        </div>
    )
}

export default Statistics