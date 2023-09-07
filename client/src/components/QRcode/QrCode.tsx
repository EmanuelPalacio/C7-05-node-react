import { QRCodeSVG } from 'qrcode.react';

export default function QrCode() {
  return (
    <QRCodeSVG
      value='https://www.freepik.es/search?format=search&query=qr'
      size={250}
      fgColor='rgb(var(--color-primary))'
      bgColor='transparent'
    />
  );
}
