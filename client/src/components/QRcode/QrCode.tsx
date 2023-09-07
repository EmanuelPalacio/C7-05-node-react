import { QRCodeSVG } from 'qrcode.react';

export default function QrCode({ id }: { id: string }) {
  return <QRCodeSVG value={`/${id}`} size={250} fgColor='rgb(var(--color-primary))' bgColor='transparent' />;
}
