import { useState } from 'react';
import { ratingPostService } from '../services/rating';
import styles from '../styles/orderFinished.module.css';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { resetTurn } from '@/redux/slices/clientTurnSlice';

export default function OrderFinished() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [qualification, setQualification] = useState({ rate: 0, comment: '' });
  const turn = useAppSelector((state) => state.ClientTurn);
  const dispatch = useAppDispatch();

  const handleChangeQualification = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQualification({ ...qualification, [e.target.name]: e.target.value });
  };

  const onSubmitQualification = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (qualification.rate <= 0 || qualification.comment.length === 0) return setErrorMessage('Debe calificar y comentar el servicio');
    const postRating = {
      rate: qualification.rate,
      comment: qualification.comment,
      turnId: turn.turnId,
    };

    console.log(postRating);
    const response = await ratingPostService(postRating);
    if (response) {
      setErrorMessage('');
      dispatch(resetTurn());
    }
  };

  return (
    <div className={styles.finishedContainer}>
      <h2>Pedido listo</h2>
      <p>Por favor, pase a retirar su pedido</p>
      <form onSubmit={onSubmitQualification} className={styles.ratingContainer}>
        <h3>Califique el servicio. Tu comentario nos ayuda a mejorar.</h3>
        <div className={styles.rating}>
          <div className={styles.radioContainer}>
            <input onChange={handleChangeQualification} type='radio' id='star1' name='rate' value={1} />
            <label htmlFor='star1' title='text'>
              1
            </label>
          </div>
          <div className={styles.radioContainer}>
            <input onChange={handleChangeQualification} type='radio' id='star2' name='rate' value={2} />
            <label htmlFor='star2' title='text'>
              2
            </label>
          </div>
          <div className={styles.radioContainer}>
            <input onChange={handleChangeQualification} type='radio' id='star3' name='rate' value={3} />
            <label htmlFor='star3' title='text'>
              3
            </label>
          </div>
          <div className={styles.radioContainer}>
            <input onChange={handleChangeQualification} type='radio' id='star4' name='rate' value={4} />
            <label htmlFor='star4' title='text'>
              4
            </label>
          </div>
          <div className={styles.radioContainer}>
            <input onChange={handleChangeQualification} type='radio' id='star5' name='rate' value={5} />
            <label htmlFor='star5' title='text'>
              5
            </label>
          </div>
        </div>
        <textarea
          onChange={handleChangeQualification}
          className={styles.formText}
          maxLength={100}
          name='comment'
          value={qualification.comment}
          placeholder='Dejenos su comentario'
        />
        <button type='submit' className={styles.formButton}>
          Enviar Calificación
        </button>
        <span style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</span>
      </form>
    </div>
  );
}
