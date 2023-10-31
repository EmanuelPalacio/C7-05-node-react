import { ReactNode } from 'react';
import style from './style.module.css';
import { Btn /* , LoginGoogle  */ } from '..';
import imgLogo from '../../assets/images/logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { Link, useLocation } from 'react-router-dom';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import Loading from '../loading/Loading';

interface TypeForm {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formDispatch: () => AsyncThunkAction<any, any, any>;
}

export default function Form({ children, formDispatch }: TypeForm): React.ReactElement<TypeForm> {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(formDispatch());
  };
  const { pathname } = useLocation();
  return (
    <div className={style.formContainer}>
      <div className={style.logoContainer}>
        <img src={imgLogo} alt='Logo de Q´rapido' className={style.logoImg} />
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        {children}

        {pathname === '/' ? (
          <>
            <Btn type='submit'>Ingresar</Btn>
            <Link to='/register'>¿No eres usuario? Registrate</Link>
          </>
        ) : (
          <>
            <Btn type='submit'>Ristrarse</Btn>
            <Link to='/'>¿Ya tienes una cuenta? Inicia sesión</Link>
          </>
        )}
      </form>
      {/* {pathname === '/' ? (
        <div className={style.otherLogins}>
          <LoginGoogle />
        </div>
      ) : null} */}
      {user.status === 'pending' && <Loading />}
    </div>
  );
}
