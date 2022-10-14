import { useAppDispatch } from '@/redux/hooks';
import { setCashier } from '@/redux/slices/cashierSlice';
import styles from '@/styles/layoutHeader.module.css';
import { useNavigate } from 'react-router-dom';
import LogOutIcon from './svg/LogOutIcon';

export default function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    navigate('/');
    localStorage.removeItem('cashierJwt');
    dispatch(setCashier({ id: '', userName: '', cashierJwt: '', isAuth: false }));
  };

  return (
    <div className={styles.logoutContainer} onClick={logout}>
      <span className={styles.textLogoutNone}>Cerrar sesión</span>
      <LogOutIcon svgProp={{ width: 25, height: 25 }} />
    </div>
  );
}
