import { ReactNode } from 'react';
import style from './style.module.css';
import { Btn, LoginGoogle } from '..';
import imgLogo from '../../assets/images/logo.svg';
import { useAppDispatch } from '../../hooks/reduxHooks';

interface TypeForm {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formDispatch: any;
}

export default function Form({ children, formDispatch }: TypeForm): React.ReactElement<TypeForm> {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(formDispatch());
  };
  return (
    <div className={style.formContainer}>
      <div className={style.logoContainer}>
        <img src={imgLogo} alt='Logo de Q´rapido' className={style.logoImg} />
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        {children}
        <Btn type='submit'>Ingresar</Btn>
      </form>
      <div className={style.otherLogins}>
        <LoginGoogle />
      </div>
    </div>
  );
}
