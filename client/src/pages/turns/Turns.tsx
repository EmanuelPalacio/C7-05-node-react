import { Btn, Input, QRanimate, QrCode } from '../../components';
import person from '../../assets/images/inputIcons/profile.png';
import style from './style.module.css';
import { useField } from '../../hooks';
import { GenerateTurn } from '../../models/Turn';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { createTurn } from '../../store/slices/turn';

export default function Turns() {
  const dispatch = useAppDispatch();
  const turn = useAppSelector((store) => store.turn);
  const [data, setData] = useField<GenerateTurn>({
    name: '',
    time: undefined,
  });
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createTurn(data));
  };
  return (
    <section className={style.container}>
      <div className={style.container_turn}>
        <div>
          <h1 className={style.container_title}>Crear Turno</h1>
          <form className={style.container_form} onSubmit={handleForm}>
            <Input id='name' type='text' icon={person} placeholder='Nombre' onChange={setData} />
            <select className={style.container_options} name='time' onChange={setData}>
              <option value={undefined}>Selecciona el tiempo de espera...</option>
              <option value={10}>10 min</option>
              <option value={20}>20 min</option>
              <option value={30}>30 min</option>
              <option value={40}>40 min</option>
            </select>
            <Btn type='submit'>Generar turno</Btn>
          </form>
        </div>
      </div>
      <div className={style.container_info}>
        <div className={style.qr_container}>
          {turn.id && turn.status === 'fulfilled' ? <QrCode id={turn.id} /> : <QRanimate />}
          <h3>{turn.id ? `#${turn.id}` : 'Creando turno...'}</h3>
        </div>
      </div>
    </section>
  );
}
