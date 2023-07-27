import style from './style.module.css';
import imgHome from '../../assets/images/login.svg';
import imgLogo from '../../assets/images/logo.svg';
import { Input, Btn, LoginGoogle } from '../../components';

export default function Home() {
  return (
    <section className={style.home}>
      <div className={style.login}>
        <div className={style.formContainer}>
          <div className={style.logoContainer}>
            <img src={imgLogo} alt='Logo de Q´rapido' className={style.logoImg} />
          </div>
          <form className={style.form}>
            <Input type='text' onChange={() => console.log('hola')} placeholder='mi_email@gmail.com' />
            <Input type='text' onChange={() => console.log('hola')} placeholder='Ingrese su contraseña' />
            <Btn type='submit' action={() => console.log('submit')}>
              Ingresar
            </Btn>
          </form>
          <div className={style.otherLogins}>
            <LoginGoogle />
          </div>
        </div>
      </div>
      <div className={style.containerSvg}>
        <img src={imgHome} alt='imagen de inicio' className={style.imageSvg} />
      </div>
    </section>
  );
}
