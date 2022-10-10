import ImageLoginSvg from '@/components/svg/ImageLogin';
import LogoSvg from '@/components/svg/Logo';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/register.module.css';

export default function Register() {
  const [inputValue, setInputValue] = useState({ email: '', username: '', password: '', repeatPassword: '' });
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

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.imgContainer}>
        <ImageLoginSvg svgProp={{ width: 500, height: 500 }} />
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
          placeholder='email'
          value={inputValue.email}
        />
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
          maxLength={12}
          minLength={8}
          autoComplete='new-password'
          id='new-password'
          value={inputValue.password}
          aria-describedby='password-constraints'
          title='La contraseña debe tener entre 8 y 12 caracteres, al menos una letra mayúscula, una minúscula, un número y un carácter especial'
          pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}'
        />
        <input
          onChange={handleChangeInput}
          className={styles.formContainer_input}
          type='password'
          name='repeatPassword'
          placeholder='repetir contraseña'
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
          Ya tiene cuenta?{' '}
          <strong>
            <Link to={'/'}>Inicie sesión aquí</Link>
          </strong>
        </span>
      </form>
    </div>
  );
}
