import style from './style.module.css';
import webTurn from '../../../../assets/images/webTurn.png';
import { QRanimate, QrCode } from '../../../../components';
import { ListTurn } from '../../../../models/Turn';
import Timer from '../timer/Timer';
import { useAppDispatch } from '../../../../hooks';
import { setTurn } from '../../../../store/slices/turn';
import { Uid } from '../../../../models/User';
export default function ViewCustomer({ turn, user }: { turn: ListTurn | undefined; user: Uid | null }) {
  const dispatch = useAppDispatch();
  return turn && user ? (
    <>
      <div className={style.finish_QR}>
        <QrCode data={{ uid: user, id: turn.id }} />
        <button onClick={() => dispatch(setTurn(turn))}>
          <img src={webTurn} alt='pantalla' />
        </button>
      </div>
      <div className={style.finish_data}>
        <p>
          <span>#</span>
          {turn.id}
        </p>
        <p>{turn.name}</p>
        <Timer endDate={turn.enddate} />
        <button>Entregar</button>
        <button>Demorar</button>
      </div>
    </>
  ) : (
    <div className={`${style.finish_QR} ${style.finish_animate}`}>
      <QRanimate />
    </div>
  );
}
