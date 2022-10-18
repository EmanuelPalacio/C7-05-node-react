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
          required
        />
        <input
          onChange={handleChangeInput}
          className={styles.formContainer_input}
          type='password'
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
          required
        />
        <input
          onChange={handleChangeInput}
          className={styles.formContainer_input}
          type='password'
          name='repeatPassword'
          placeholder='Repetir contraseña'
          maxLength={12}
          minLength={8}
          autoComplete='new-password'
          value={inputValue.repeatPassword}
          required
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
