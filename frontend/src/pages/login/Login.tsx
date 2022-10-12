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
    if (username === '' || password === '') return setErrorMessage('Llena todos los campos');

    const cashier = await authService(username, password);

    if (!cashier) return setErrorMessage('Usuario o contraseña incorrectos');

    localStorage.setItem('cashierJwt', cashier.cashierJwt);
    dispatch(setCashier(cashier));
    navigate('/dashboard');

    setInputValue({ username: '', password: '' });
    setErrorMessage('');
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
          placeholder='usuario'
          value={inputValue.username}
        />
        <input
          onChange={handleChangeInput}
          className={styles.formContainer_input}
          type='password'
          name='password'
          placeholder='contraseña'
          autoComplete='current-password'
          value={inputValue.password}
          id='current-password'
        />
        <button type='submit' className={styles.formContainer_button}>
          Iniciar sesión
        </button>
        <span className={styles.formContainer_errorMessage}>{errorMessage}</span>
        <a href='#'>¿Olvidaste tu contraseña?</a>
        <span>
          ¿No tienes una cuenta? <Link to='/register'>Registrate aquí</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
