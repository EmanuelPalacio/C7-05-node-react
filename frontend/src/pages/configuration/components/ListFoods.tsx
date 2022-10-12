import styles from '../styles/listFoods.module.css';
import ItemFood from './ItemFood';

export default function ListFoods() {
  return (
    <div className={styles.listFoodsContainer}>
      <ItemFood />
      <ItemFood />
      <ItemFood />
      <ItemFood />
      <ItemFood />
      <ItemFood />
    </div>
  );
}
