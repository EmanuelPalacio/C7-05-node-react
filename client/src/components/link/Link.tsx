import { NavLink } from 'react-router-dom';
import style from './style.module.css';

interface NavLink {
  children: React.ReactNode;
  param: string;
}

export default function Link({ children, param }: NavLink) {
  return (
    <NavLink
      to={`/dashboard/${param}`}
      className={({ isActive, isPending }) => (isPending ? `${style.link}` : isActive ? `${style.link_active}` : '')}
    >
      {children}
    </NavLink>
  );
}
