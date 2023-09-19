import { Navigate } from 'react-router-dom';
import { QRanimate, QrCode } from '../../components';
import { useAppSelector } from '../../hooks/reduxHooks';

export default function Scan() {
  const { user, turn } = useAppSelector((store) => store);
  return user.token ? (
    <section>{turn.id && turn.status === 'fulfilled' ? <QrCode id={turn.id} /> : <QRanimate />}</section>
  ) : (
    <Navigate replace to='/' />
  );
}
