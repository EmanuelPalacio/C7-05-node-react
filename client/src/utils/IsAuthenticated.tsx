import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';

export default function IsAuthenticated() {
  const userState = useAppSelector((store) => store.user);
  return userState.token ? <Outlet /> : <Navigate replace to='/' />;
}
