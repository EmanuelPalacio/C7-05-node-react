import { Btn, Input } from '../../components';
import person from '../../assets/images/inputIcons/profile.png';
import style from './style.module.css';

export default function Turns() {
  return (
    <section className={style.container}>
      <div className={style.container_turn}>
        <div>
          <h1 className={style.container_title}>Crear Turno</h1>
          <form className={style.container_form}>
            <Input type='text' icon={person} placeholder='Nombre' />
            <select>
              <option value={10}>10 min</option>
              <option value={20}>20 min</option>
              <option value={30}>30 min</option>
              <option value={40}>40 min</option>
            </select>
            <Btn type='submit'>Generar turno</Btn>
          </form>
        </div>
      </div>
      <div className={style.container_listTunrs}></div>
    </section>
  );
}
