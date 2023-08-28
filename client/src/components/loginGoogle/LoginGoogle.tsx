import style from './style.module.css';
import google from '../../assets/images/googleLogo.svg';

export default function LoginGoogle() {
  return (
    <button className={style.btn}>
      <img src={google} className={style.img} />
      <p>Ingresa con google</p>
    </button>
  );
}
