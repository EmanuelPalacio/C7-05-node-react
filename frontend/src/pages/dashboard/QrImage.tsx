import React, { useState } from 'react';
import QR from 'qrcode';

interface IProps {
  qrCode:string
}

const QrImage: React.FC<IProps> = (props: IProps) => {

  const [qr] = useState(props.qrCode)  
  const [mockQr,setMockQr] = useState<string>();
  QR.toDataURL(window.location.origin+'/order/'+1, (err,code:string) => { // http://localhost:3000/order/1
    if (err) return console.log('Error en el qr');
    setMockQr(code)
  })

  

  return(
    <>
    { qr 
      ? (<img src={qr} aria-label='escanear qr'/>) : 
      (
        <img src={mockQr} aria-label='escanear qr' />
      )
    }
    </>
  )

  
}


export default QrImage;