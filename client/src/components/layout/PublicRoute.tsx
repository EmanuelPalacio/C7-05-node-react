import { Navigate, Outlet } from 'react-router-dom';
import style from './styles/publicStyle.module.css';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Error, QRanimate, QRillustration } from '..';

export default function PublicRoute() {
  const userState = useAppSelector((store) => store.user);
  return !userState.token ? (
    <section className={style.home}>
      <div className={style.login}>
        <Outlet />
      </div>
      <div className={style.containerSvg}>
        <QRillustration classStyle={style.imageSvg}>
          <QRanimate />
        </QRillustration>
      </div>
      {userState.error ? <Error status={userState.error.status} /> : null}
    </section>
  ) : (
    <Navigate replace to='/dashboard/turns' />
  );
}
