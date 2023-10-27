import { Navigate, Outlet } from 'react-router-dom';
import style from './styles/protectedStyle.module.css';
import logo from '../../assets/images/logo.svg';
import logout from '../../assets/images/logout.png';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logOut } from '../../store/slices/user';
import { Error, Link } from '..';
import { useState } from 'react';

export default function ProtectedRoute() {
  const dispatch = useAppDispatch();
  const [viewMenu, setViewMenu] = useState('');
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
        <ul className={`${style.menu_list} ${viewMenu}`}>
          <li className={style.menu_item}>
            <Link param='turns'>Turnos</Link>
          </li>
          <li className={style.menu_item}>
            <Link param='statistics'>Estadistícas</Link>
          </li>
          <li className={style.menu_item}>
            <button className={style.logout} onClick={() => dispatch(logOut())}>
              <img src={logout} alt='Cerrar Sesión' />
            </button>
          </li>
        </ul>
        <button
          onClick={() =>
            setViewMenu((prev) => {
              if (prev === style.menu_active) {
                return style.menu__close;
              } else {
                return style.menu_active;
              }
            })
          }
          className={`${style.menu__btn} ${viewMenu === style.menu_active ? style.menu__btn_close : ''}`}
          type='button'
          title='boton'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <Outlet />
      {error ? <Error status={error} /> : null}
    </>
  ) : (
    <Navigate replace to='/' />
  );
}
