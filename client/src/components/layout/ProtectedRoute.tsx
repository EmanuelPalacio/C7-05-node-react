import { Navigate, Outlet } from 'react-router-dom';
import style from './styles/protectedStyle.module.css';
import logo from '../../assets/images/logo.svg';
import logout from '../../assets/images/logout.png';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logOut } from '../../store/slices/user';
import { Error, Link } from '..';

export default function ProtectedRoute() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((store) => store.user);
  const turnState = useAppSelector((store) => store.turn);
  const error = turnState.error?.status || userState.error?.status;
  return userState.token ? (
    <>
      <nav className={style.menu}>
        <div className={style.logo}>
          <img src={logo} alt='logo' />
          <p>QRapido</p>
        </div>
        <ul className={style.menu_list}>
          <li className={style.menu_item}>
            <Link param='turns'>Turnos</Link>
          </li>
          <li className={style.menu_item}>
            <Link param='statistics'>Estadistícas</Link>
          </li>
        </ul>
        <button className={style.logout} onClick={() => dispatch(logOut())}>
          <img src={logout} alt='Cerrar Sesión' />
        </button>
      </nav>
      <Outlet />
      {error ? <Error status={error} /> : null}
    </>
  ) : (
    <Navigate replace to='/' />
  );
}
