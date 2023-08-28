import { NavLink } from 'react-router-dom';
import style from './style.module.css';

export default function ({ param }: { param: string }) {
  return (
    <NavLink
      to={`/dashboard/${param}`}
      className={({ isActive, isPending }) => (isPending ? `${style.link}` : isActive ? `${style.link_active}` : '')}
    ></NavLink>
  );
}
