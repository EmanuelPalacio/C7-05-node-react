import styles from '@/styles/layoutHeader.module.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

export default function LayoutHeader() {
  const location = useLocation();

  const handleLinkActive = (path: string) => {
    if (location.pathname === path) {
      return styles.isLinkActive;
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div></div>
        <div className={styles.layoutHeader}>
          <Link to='/dashboard' className={`${styles.headerLink} ${handleLinkActive('/dashboard')}`}>
            Pedidos
          </Link>
          <Link to='/statistics' className={`${styles.headerLink} ${handleLinkActive('/statistics')}`}>
            Estadísticas
          </Link>
          <Link to='/configuration' className={`${styles.headerLink} ${handleLinkActive('/configuration')}`}>
            Configuración
          </Link>
        </div>
        <LogoutBtn />
      </div>
      <Outlet />
    </>
  );
}
