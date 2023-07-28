import style from './style.module.css';

interface Input {
  type: 'text' | 'number' | 'email' | 'password';
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  id: string;
  required?: boolean;
  pattern?: string;
}

export default function Input({ type, onChange, placeholder, id, required, pattern }: Input) {
  return (
    <label htmlFor={id} className={style.container}>
      <input
        name={id}
        required={required}
        pattern={pattern}
        className={style.containerInput}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}
