import ImageLoginSvg from '@/components/svg/ImageLogin';
import LogoSvg from '@/components/svg/Logo';
import React, { useState } from 'react';
import { authService } from './services/auth';
import styles from './styles/login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCashier } from '@/redux/slices/cashierSlice';

const Login = () => {
  const [inputValue, setInputValue] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = inputValue;
    if (username === '' || password === '') return setErrorMessage('Por favor, completa todos los campos');

    const cashier = await authService(username, password);

    if (!cashier) return setErrorMessage('Usuario o contraseña incorrectos');

    localStorage.setItem('cashierJwt', cashier.cashierJwt);
    dispatch(setCashier(cashier));
    navigate('/dashboard');

    setInputValue({ username: '', password: '' });
    setErrorMessage('');
  };

  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.imgContainer}>
        <ImageLoginSvg />
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <span className={styles.formContainer_logo}>
          <LogoSvg svgProp={{ width: 166, height: 180 }} />
        </span>
        <input
          onChange={handleChangeInput}
          className={styles.formContainer_input}
          type='email'
          name='username'
          placeholder='Correo electrónico'
          value={inputValue.username}
        />
        <div className={styles.div_passwordInput}>
          <input
            onChange={handleChangeInput}
            className={styles.formContainer_passwordinput}
            type={passwordShown ? 'text' : 'password'}
            name='password'
            placeholder='Contraseña'
            autoComplete='current-password'
            value={inputValue.password}
            id='current-password'
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
        <button type='submit' className={styles.formContainer_button}>
          Iniciar sesión
        </button>
        <span className={styles.formContainer_errorMessage}>{errorMessage}</span>
        <a href='#'>¿Olvidaste tu contraseña?</a>
        <span>
          ¿No tienes una cuenta?{' '}
          <Link to='/register'>
            <u>Crear cuenta aquí</u>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
