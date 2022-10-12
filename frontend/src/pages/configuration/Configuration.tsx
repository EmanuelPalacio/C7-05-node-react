import FormFoods from './components/FormFoods';
import ListFoods from './components/ListFoods';
import styles from './styles/configuration.module.css';

export default function Configuration() {
  return (
    <div className={styles.configurationContainer}>
      <section>
        <h2>Categorias de comida</h2>
        <div className={styles.foodsContainer}>
          <FormFoods />
          <ListFoods />
        </div>
      </section>
    </div>
  );
}
