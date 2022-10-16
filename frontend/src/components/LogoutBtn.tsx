import { useAppDispatch } from '@/redux/hooks';
import { setCashier } from '@/redux/slices/cashierSlice';
import styles from '@/styles/layoutHeader.module.css';
import { useNavigate } from 'react-router-dom';

export default function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    navigate('/');
    localStorage.removeItem('cashierJwt');
    dispatch(setCashier({ id: '', userName: '', cashierJwt: '', isAuth: false }));
  };

  return (
    <button type='button' onClick={logout} className={`${styles.logoutBtn}`} >
      Cerrar sesión
    </button>
  );
}
