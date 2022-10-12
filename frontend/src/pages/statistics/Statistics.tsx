import ChartClient from './components/ChartClient';
import styles from './styles/statitistics.module.css';

const Statistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      <div className={`${styles.statistics}`}>
        <ChartClient />
      </div>
    </div>
  );
};

export default Statistics;
