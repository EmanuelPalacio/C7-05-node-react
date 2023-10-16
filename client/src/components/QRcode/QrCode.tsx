import { QRCodeSVG } from 'qrcode.react';
import { Uid } from '../../models/User';
interface QrCodeData {
  uid: Uid;
  id: string;
  size?: number;
}
export default function QrCode({ data }: { data: QrCodeData }) {
  return (
    <QRCodeSVG
      value={`http://localhost:5173/scan/${data.uid}/${data.id}`}
      size={data.size}
      style={{ height: '100%' }}
      fgColor='rgb(var(--color-primary))'
      bgColor='transparent'
    />
  );
}
