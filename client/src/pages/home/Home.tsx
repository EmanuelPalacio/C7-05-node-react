import style from './style.module.css';
import imgHome from '../../assets/images/login.svg';
import imgLogo from '../../assets/images/logo.svg';
import { Input, Btn, LoginGoogle } from '../../components';
import { useField } from '../../hooks';

export default function Home() {
  const { value, handleInput } = useField();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <section className={style.home}>
      <div className={style.login}>
        <div className={style.formContainer}>
          <div className={style.logoContainer}>
            <img src={imgLogo} alt='Logo de Q´rapido' className={style.logoImg} />
          </div>
          <form className={style.form} onSubmit={handleSubmit}>
            <Input id='name' type='email' onChange={handleInput} placeholder='mi_email@gmail.com' />
            <Input id='password' type='password' onChange={handleInput} placeholder='Ingrese su contraseña' />
            <Btn type='submit'>Ingresar</Btn>
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
