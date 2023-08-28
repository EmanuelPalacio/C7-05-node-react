import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import style from './styles/publicStyle.module.css';
import imgHome from '../../assets/images/login.svg';

export default function PublicRoute() {
  const userState = useAppSelector((store) => store.user);
  return !userState.token ? (
    <section className={style.home}>
      <div className={style.login}>
        <Outlet />
      </div>
      <div className={style.containerSvg}>
        <img src={imgHome} alt='imagen de inicio' className={style.imageSvg} />
      </div>
    </section>
  ) : (
    <Navigate replace to='/dashboard/turns' />
  );
}
