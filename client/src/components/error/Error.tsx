import style from './style.module.css';
import errorAlert from '../../assets/images/alerts/errorAlert.svg';
import { Btn } from '..';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { errorTurnClear } from '../../store/slices/turn';
import { clearLocalStorage } from '../../utils';
import { errorUserClear, logOut } from '../../store/slices/user';

export default function Error({ status }: { status: number }) {
  const dispatch = useAppDispatch();
  let errorMessage;
  let action;
  switch (status) {
    case 400:
      errorMessage = 'Intentalo nueva muente';
      action = () => {
        dispatch(errorTurnClear());
      };
      break;
    case 401:
      errorMessage = 'La sesion a expirado';
      action = () => {
        clearLocalStorage();
        dispatch(errorTurnClear());
        dispatch(errorUserClear());
        dispatch(logOut());
      };
      break;
    case 403:
      errorMessage = 'No tienes permiso para acceder a este recurso.';
      action = () => {
        dispatch(errorTurnClear());
        dispatch(errorUserClear());
      };
      break;
    case 404:
      errorMessage = 'El recurso no se encuentra.';
      action = () => {
        dispatch(errorTurnClear());
        dispatch(errorUserClear());
      };
      break;
    default:
      errorMessage = 'Ocurrió un error desconocido.';
      action = () => {
        dispatch(errorTurnClear());
        dispatch(errorUserClear());
      };
  }
  return (
    <div className={style.container}>
      <div className={style.alert}>
        <img src={errorAlert} alt='Mensaje de error' />
        <p>{errorMessage}</p>
        <Btn type='button' action={action}>
          Cerrar
        </Btn>
      </div>
    </div>
  );
}
