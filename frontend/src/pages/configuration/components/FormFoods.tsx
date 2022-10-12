import styles from '../styles/formFoods.module.css';

export default function FormFoods() {
  return (
    <div className={styles.formContainer}>
      <h3>Crea una categoria</h3>
      <form className={styles.formContainer}>
        <input type='text' placeholder='Nombre categoria' />
        <div className={styles.timeContainer}>
          <span>Tiempo estimado</span>
          <select title='timeSelect' name='time'>
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
        <button type='submit'>Agregar</button>
      </form>
    </div>
  );
}
