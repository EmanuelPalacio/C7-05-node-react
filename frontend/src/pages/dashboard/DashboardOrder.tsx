import React, { useEffect, useState } from 'react';
import QrImage from './QrImage';
import styles from './styles/modals.module.css'

interface order {
    orderId: string,
    tiempo: number,
    mesa: number,
    }

const DashboardOrder: React.FC<any> = ({activeModal, orden}) =>{
    const [modal, setModal] = useState<boolean>(false)
    const [client, setClient] = useState<order>({
        orderId: 'sin Definir',
        tiempo: 0,
        mesa: 0,
        }) 

    const data = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement >) => { 
        setClient({...client,[e.currentTarget.name]: e.currentTarget.value})
    }
    const qr = () =>{
        orden(client)
        setModal(true)
    }

    const toggleModal = () => {
        activeModal()
    }
    /* useEffect solo para comprobar consola */
    useEffect(()=>{
        console.log(client.orderId)
    },[client])

    return(
        <>
        
        <div className={`${styles.window}`}>
            { !modal ?
            <div className={`${styles.modal}`}>
                <button className={`${styles.modalButton}`} onClick={ ()=> activeModal() }>X</button>
                <form className={`${styles.modalForm}`}>
                    <input type="text" name='orderId' placeholder='ID' onChange={data}/>
                    <input type="number" name="mesa" placeholder="Numero de mesa"onChange={data}/>
                    <select title="timeSelect" name="tiempo"onChange={data}>
                        <option>5min</option>
                        <option>10min</option>
                        <option>15min</option>
                        <option>20min</option>
                        <option>25min</option>
                        <option>30min</option>
                        <option>35min</option>
                        <option>40min</option>
                    </select>
                    <button type="button" onClick={qr}>Generar orden</button>
                </form>
            </div>
            :
            <div>
                <button className={styles.modalButton} onClick={toggleModal} type='button'>X</button>
                <QrImage qrCode={client.orderId} />
            </div>
            }
        </div>
        </>
    )
}

export default DashboardOrder;