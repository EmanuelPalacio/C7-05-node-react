import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Link } from '..';

export default function ProtectedRoute() {
  const userState = useAppSelector((store) => store.user);
  return userState.token ? (
    <>
      <nav>
        <ul>
          <li>
            <Link param='turns' />
            <Link param='statistics' />
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  ) : (
    <Navigate replace to='/' />
  );
}
