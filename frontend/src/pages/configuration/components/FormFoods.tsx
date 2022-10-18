import { useEffect, useState } from 'react';
import { foodCreateService, foodUpdateService } from '../services/foods';
import styles from '../styles/formFoods.module.css';
import { useAppDispatch } from '@/redux/hooks';
import { addFood, updateFood } from '@/redux/slices/foodsSlice';
import { Food } from '@/models/foods.type';

interface IProps {
  updateForm: Food;
  setUpdateForm: React.Dispatch<React.SetStateAction<Food>>;
}

export default function FormFoods({ updateForm, setUpdateForm }: IProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const [foodForm, setFoodForm] = useState({ foodName: '', time: 5 });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (updateForm.foodId) {
      setFoodForm({ foodName: updateForm.optionName, time: updateForm.estimatedTime });
    }
  }, [updateForm]);

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFoodForm({ ...foodForm, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (foodForm.foodName.trim() === '') return setErrorMessage('El nombre de la comida no puede estar vacío');

    const foodData = {
      foodId: '',
      optionName: foodForm.foodName,
      estimatedTime: foodForm.time,
    };

    const foodCreated = await foodCreateService(foodData);

    if (foodCreated) {
      dispatch(addFood(foodCreated));
      setFoodForm({ foodName: '', time: 5 });
      setErrorMessage('');
      setUpdateForm({ foodId: '', optionName: '', estimatedTime: 0 });
    }
  };

  const handleSubmitUpdateForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (foodForm.foodName.trim() === '') return setErrorMessage('El nombre de la comida no puede estar vacío');

    const foodData = {
      foodId: updateForm.foodId,
      optionName: foodForm.foodName,
      estimatedTime: foodForm.time,
    };

    foodUpdateService(foodData).then((foodUpdated) => {
      if (foodUpdated) {
        dispatch(updateFood({ ...foodUpdated, foodId: updateForm.foodId }));
        setFoodForm({ foodName: '', time: 5 });
        setErrorMessage('');
        setUpdateForm({ foodId: '', optionName: '', estimatedTime: 0 });
      }
    });
  };

  return (
    <div className={styles.formContainer}>
      <h3>Crea una categoría </h3>
      <form onSubmit={updateForm.foodId ? handleSubmitUpdateForm : handleSubmitForm} className={styles.formContainer}>
        <input onChange={handleChangeForm} value={foodForm.foodName} type='text' name='foodName' placeholder='Nombre categoría' maxLength={16}/>
        <div className={styles.timeContainer}>
          <span>Tiempo estimado</span>
          <select value={foodForm.time} onChange={handleChangeForm} title='timeSelect' name='time'>
            <option value={5}> 5 min</option>
            <option value={10}>10 min</option>
            <option value={15}>15 min</option>
            <option value={20}>20 min</option>
            <option value={25}>25 min</option>
            <option value={30}>30 min</option>
            <option value={35}>35 min</option>
            <option value={40}>40 min</option>
          </select>
        </div>
        <button type='submit'>{updateForm.foodId ? 'Actualizar' : 'Agregar'}</button>
        <span style={{ color: 'red' }}>{errorMessage}</span>
      </form>
    </div>
  );
}
