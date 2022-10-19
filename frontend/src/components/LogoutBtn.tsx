import { useAppDispatch } from '@/redux/hooks';
import { setCashier } from '@/redux/slices/cashierSlice';
import styles from '@/styles/layoutHeader.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
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
      <FontAwesomeIcon icon={faArrowRightFromBracket} size='xl'/>
      <span>Cerrar sesión</span>
    </button>
  );
}
