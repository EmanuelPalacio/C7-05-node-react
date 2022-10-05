import { useState } from 'react';
import styles from '../styles/orderFinished.module.css';

export default function OrderFinished() {
  const [rating, setRating] = useState('');

  const onSelectRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setRating(e.target.value);
  };

  const onSubmitRating = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === '') return;

    console.log('enviado');
  };

  return (
    <div className={styles.finishedContainer}>
      <h2>Orden lista</h2>
      <p>Por favor, pase a retirar su pedido</p>
      <form onSubmit={onSubmitRating} className={styles.ratingContainer}>
        <h3>Califique el servicio</h3>
        <div className={styles.rating}>
          <div className={styles.radioContainer}>
            <input onChange={onSelectRating} type='radio' id='star1' name='rating' value='1' />
            <label htmlFor='star1' title='text'>
              1
            </label>
          </div>
          <div className={styles.radioContainer}>
            <input onChange={onSelectRating} type='radio' id='star2' name='rating' value='2' />
            <label htmlFor='star2' title='text'>
              2
            </label>
          </div>
          <div className={styles.radioContainer}>
            <input onChange={onSelectRating} type='radio' id='star3' name='rating' value='3' />
            <label htmlFor='star3' title='text'>
              3
            </label>
          </div>
          <div className={styles.radioContainer}>
            <input onChange={onSelectRating} type='radio' id='star4' name='rating' value='4' />
            <label htmlFor='star4' title='text'>
              4
            </label>
          </div>
          <div className={styles.radioContainer}>
            <input onChange={onSelectRating} type='radio' id='star5' name='rating' value='5' />
            <label htmlFor='star5' title='text'>
              5
            </label>
          </div>
        </div>
        <button type='submit' className={styles.formButton}>
          Enviar Calificación
        </button>
      </form>
    </div>
  );
}
