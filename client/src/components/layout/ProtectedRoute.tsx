import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Error, Link } from '..';
import style from './styles/protectedStyle.module.css';

export default function ProtectedRoute() {
  const userState = useAppSelector((store) => store.user);
  const turnState = useAppSelector((store) => store.turn);
  const error = turnState.error?.status || userState.error?.status;
  return userState.token ? (
    <>
      <nav className={style.menu}>
        <ul className={style.menu_list}>
          <li className={style.menu_item}>
            <Link param='turns'>Turnos</Link>
          </li>
          <li className={style.menu_item}>
            <Link param='statistics'>Estadistícas</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      {error ? <Error status={error} /> : null}
    </>
  ) : (
    <Navigate replace to='/' />
  );
}
