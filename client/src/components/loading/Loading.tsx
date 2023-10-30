import style from './style.module.css';
import logo from '../../assets/images/logo.svg';
export default function Loading() {
  return (
    <div className={style.loading}>
      <img src={logo} alt='logo' />
    </div>
  );
}
