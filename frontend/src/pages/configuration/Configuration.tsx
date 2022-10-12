import { Food } from '@/models/foods.type';
import { useState } from 'react';
import FormFoods from './components/FormFoods';
import ListFoods from './components/ListFoods';
import styles from './styles/configuration.module.css';

export default function Configuration() {
  const [updateForm, setUpdateForm] = useState({ foodId: '', optionName: '', estimatedTime: 0 } as Food);

  return (
    <div className={styles.configurationContainer}>
      <section>
        <h2>Categorias de comida</h2>
        <div className={styles.foodsContainer}>
          <FormFoods updateForm={updateForm} setUpdateForm={setUpdateForm} />
          <ListFoods setUpdateForm={setUpdateForm} />
        </div>
      </section>
    </div>
  );
}
