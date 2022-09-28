import ImageLoginSvg from '@/components/svg/ImageLogin';
import LogoSvg from '@/components/svg/Logo';
import React, { useState } from 'react';
import { authService } from './services/auth';
import styles from './styles/login.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice';

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

    const user = await authService(username, password);

    if (!user) return setErrorMessage('Usuario o contraseña incorrectos');

    console.log(user);
    localStorage.setItem('userJwt', user.userJwt);
    dispatch(setUser(user));
    navigate('/dashboard');
    setInputValue({ username: '', password: '' });
    return setErrorMessage('');
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
          type='text'
          name='username'
          placeholder='usuario'
          maxLength={15}
          value={inputValue.username}
          autoComplete='current-password'
          id='current-password'
        />
        <input
          onChange={handleChangeInput}
          className={styles.formContainer_input}
          type='password'
          name='password'
          placeholder='contraseña'
          maxLength={15}
          value={inputValue.password}
        />
        <button type='submit' className={styles.formContainer_button}>
          Iniciar sesión
        </button>
        <span className={styles.formContainer_errorMessage}>{errorMessage}</span>
        <a>¿Olvidaste tu contraseña?</a>
      </form>
    </div>
  );
};

<style></style>;

export default Login;
