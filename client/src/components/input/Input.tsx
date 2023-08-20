import { useState } from 'react';
import style from './style.module.css';

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'number' | 'email' | 'password';
  icon: string;
  buttonIcon?: string;
  error?: string;
}

export default function Input({ type, onChange, placeholder, id, required, pattern, error, value, icon, buttonIcon }: Input) {
  const [isType, setIsType] = useState(type);
  return (
    <>
      <label htmlFor={id} className={style.container}>
        <div className={style.containerInput}>
          <img src={icon} alt={`${id} icon`} className={style.inputIcon} />
          <input
            name={id}
            required={required}
            pattern={pattern}
            className={style.input}
            type={isType}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
          {buttonIcon ? (
            <button className={style.btn} onClick={() => setIsType(isType === 'password' ? 'text' : 'password')}>
              <img
                src={buttonIcon}
                alt={`boton ${id} icon`}
                className={`${style.inputIcon} ${isType === 'password' ? style.inputIcon_hidden : ''}`}
              />
            </button>
          ) : null}
        </div>
        <p className={style.error}>{error}</p>
      </label>
    </>
  );
}
