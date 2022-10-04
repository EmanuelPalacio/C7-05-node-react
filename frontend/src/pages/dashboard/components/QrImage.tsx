import React, { useEffect, useState } from 'react';
import QR from 'qrcode';
import styles from '../styles/modals.module.css'

interface IProps {
  qrCode:string
}

const QrImage = ({qrCode}:IProps) => {

  const [qr,setQr] = useState('') // useState(qrCode) 

  const [mockQr,setMockQr] = useState<string>('1');

  useEffect( () => {
    if (qr){
      QR.toDataURL(window.location.origin+'/client/'+qrCode, (err,code:string) => { // http://localhost:3000/order/qrCode
        if (err) return console.log('Error en el qr');
        setQr(code)
      })
    }else{
      QR.toDataURL(window.location.origin+'/client/'+qrCode, (err,code:string) => { // http://localhost:3000/order/qrCode
        if (err) return console.log('Error en el qr');
        setMockQr(code)
      })
    }
  })

  

  return(
    <>
    <div className={styles.qrModal}>
      <h2>Pedido creado con éxito</h2>
      <img className={styles.qrImg} src={`${qr ? qr : mockQr}`} aria-label='escanear qr'/>
    </div>
      
    </>
  )

  
}


export default QrImage;