import style from './style.module.css';

interface BtnType {
  children: string;
  type: 'button' | 'submit';
  action?: () => void;
}

export default function Btn({ children, type, action }: BtnType) {
  return (
    <button onClick={action} type={type} className={style.btn}>
      {children}
    </button>
  );
}
