import { QRCodeSVG } from 'qrcode.react';

export default function QrCode({ id, size }: { id: string; size?: number }) {
  return <QRCodeSVG value={`/${id}`} size={size} style={{ height: '100%' }} fgColor='rgb(var(--color-primary))' bgColor='transparent' />;
}
