import { foodsService } from '@/pages/configuration/services/foods';
import styles from '@/styles/layoutHeader.module.css';
import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hooks';
import { setFoods } from '@/redux/slices/foodsSlice';
import LogoutBtn from './LogoutBtn';

export default function LayoutHeader() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleLinkActive = (path: string) => {
    if (location.pathname === path) {
      return styles.isLinkActive;
    }
  };

  useEffect(() => {
    foodsService().then((res) => res && dispatch(setFoods(res)));
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.layoutHeader}>
          <Link to='/dashboard' className={`${styles.headerLink} ${handleLinkActive('/dashboard')}`}>
            Pedidos
          </Link>
          <Link to='/statistics' className={`${styles.headerLink} ${handleLinkActive('/statistics')}`}>
            Estadísticas
          </Link>
          <Link to='/configuration' className={`${styles.headerLink} ${handleLinkActive('/configuration')}`}>
          Categorías
          </Link>
          <LogoutBtn />
        </div>
      </div>
      <Outlet />
    </>
  );
}
