import ImageLoginSvg from '@/components/svg/ImageLogin';
import LogoSvg from '@/components/svg/Logo';
import { Cashier } from '@/models/cashier.type';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerService } from './services/register.service';
import styles from './styles/register.module.css';

export default function Register() {
  const [inputValue, setInputValue] = useState({ email: '', password: '', repeatPassword: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
    try {
      const newUser: Cashier = await registerService(inputValue.email, inputValue.password);
      if (newUser) {
        alert('¡Usuario creado con éxito!');
        navigate('/');
      }
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.toString());
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.imgContainer}>
        <ImageLoginSvg />
      </div>
      <form onSubmit={handleRegisterSubmit} className={styles.formContainer}>
        <span className={styles.formContainer_logo}>
          <LogoSvg svgProp={{ width: 166, height: 180 }} />
        </span>
        <h2>Registrese aquí</h2>
        <input
          onChange={handleChangeInput}
          className={styles.formContainer_input}
          type='email'
          name='email'
          placeholder='Correo electrónico'
          value={inputValue.email}
        />
        <div className={styles.div_passwordInput}>
          <input
            onChange={handleChangeInput}
            className={styles.formContainer_passwordinput}
            type={passwordShown ? 'text' : 'password'}
            name='password'
            placeholder='Contraseña'
            maxLength={12}
            minLength={8}
            autoComplete='new-password'
            id='new-password'
            value={inputValue.password}
            aria-describedby='password-constraints'
            title='La contraseña debe tener entre 8 y 12 caracteres, al menos una letra mayúscula, una minúscula, un número y un carácter especial'
            pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}'
          />
          <a onClick={togglePasswordShown}>
            {passwordShown ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z' />
                <path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' viewBox='0 0 16 16'>
                <path d='m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z' />
                <path d='M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z' />
              </svg>
            )}
          </a>
        </div>
        <input
          onChange={handleChangeInput}
          className={styles.formContainer_input}
          type={passwordShown ? 'text' : 'password'}
          name='repeatPassword'
          placeholder='Repetir contraseña'
          maxLength={12}
          minLength={8}
          autoComplete='new-password'
          value={inputValue.repeatPassword}
        />

        {/*    <div id='password-constraints'>Oco o mas</div> */}
        <button type='submit' className={styles.formContainer_button}>
          Registrarse
        </button>
        <span className={styles.formContainer_errorMessage}>{errorMessage}</span>
        <span>
          ¿Ya tienes una cuenta?{' '}
          <strong>
            <Link to={'/'}>Inicia sesión aquí</Link>
          </strong>
        </span>
      </form>
    </div>
  );
}
