import styles from '../styles/listFoods.module.css';
import ItemFood from './ItemFood';
import { useAppSelector } from '@/redux/hooks';
import { Food } from '@/models/foods.type';

interface IProps {
  setUpdateForm: React.Dispatch<React.SetStateAction<Food>>;
}

export default function ListFoods({ setUpdateForm }: IProps) {
  const Foods = useAppSelector((state) => state.Foods);

  const handleClickUpdate = (food: Food) => {
    setUpdateForm(food);
  };

  return (
    <div className={styles.listFoodsContainer}>
      {Foods.map((food) => (
        <ItemFood key={food.foodId} foodData={food} handleClickUpdate={handleClickUpdate} />
      ))}
    </div>
  );
}
