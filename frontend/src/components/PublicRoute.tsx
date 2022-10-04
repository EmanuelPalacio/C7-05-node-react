import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
  isAuth: boolean | undefined;
  children?: React.ReactNode;
  redirectTo: string;
}

export default function PublicRoute({ isAuth, children, redirectTo }: IProps) {
  if (isAuth === undefined) return <></>;

  if (isAuth) return <Navigate to={redirectTo} />;

  return children ? <>children</> : <Outlet />;
}
