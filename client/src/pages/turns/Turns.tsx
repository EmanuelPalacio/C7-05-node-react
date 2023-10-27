import style from './style.module.css';
import { Btn, Input, QRanimate, QrCode } from '../../components';
import person from '../../assets/images/inputIcons/profile.png';
import webTurn from '../../assets/images/webTurn.png';
import { useField } from '../../hooks';
import { GenerateTurn } from '../../models/Turn';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { createTurn, reset } from '../../store/slices/turn';

export default function Turns() {
  const dispatch = useAppDispatch();
  const turn = useAppSelector((store) => store.turn);
  const user = useAppSelector((store) => store.turn);
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
      <div className={`${style.container_turn} ${turn.id ? style.container_desactive : ''}`}>
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
      <div className={`${style.container_info} ${turn.id ? style.container_active : ''}`}>
        <div className={style.qr_container}>
          {turn.id && user.uid && turn.status === 'fulfilled' ? <QrCode data={{ uid: user.uid, id: turn.id, size: 250 }} /> : <QRanimate />}
          <div className={`${style.container__screen} ${turn.id ? style.container_desactive : ''}`}>
            <h3>Abrir en otra pantalla</h3>
            <a href='/dashboard/scan' target='_blank'>
              <img src={webTurn} alt='turno' />
            </a>
          </div>
          <Btn
            type='button'
            action={() => {
              dispatch(reset());
            }}
          >
            Generar otro turno
          </Btn>
        </div>
      </div>
    </section>
  );
}
