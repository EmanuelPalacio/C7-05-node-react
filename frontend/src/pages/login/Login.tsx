import ImageLoginSvg from '@/components/svg/ImageLogin';
import LogoSvg from '@/components/svg/Logo';
import React from 'react';
import styles from './styles/login.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imgContainer}>
        <ImageLoginSvg />
      </div>
      <form className={styles.formContainer}>
        <span className={styles.formContainer_logo}>
          <LogoSvg svgProp={{ width: 166, height: 180 }} />
        </span>
        <input className={styles.formContainer_input} type='text' name='username' placeholder='usuario' />
        <input className={styles.formContainer_input} type='password' name='password' placeholder='contraseña' />
        <button className={styles.formContainer_button}>Iniciar sesión</button>
        <a>¿Olvidaste tu contraseña?</a>
      </form>
    </div>
  );
};

<style></style>;

export default Login;
