import style from './style.module.css';

interface Input {
  type: 'text' | 'number' | 'email' | 'password';
  onChange: () => void;
  placeholder: string;
}

export default function Input({ type, onChange, placeholder }: Input) {
  return (
    <label className={style.container}>
      <input className={style.containerInput} type={type} onChange={() => onChange()} placeholder={placeholder} />
    </label>
  );
}
