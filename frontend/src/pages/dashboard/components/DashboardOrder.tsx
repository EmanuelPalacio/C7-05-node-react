import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QrImage from './QrImage';
import styles from '../styles/modals.module.css';
import {Turn} from '../../../models/turns.type';


interface props {
    activeModal: () => void
    addTurn: (object: Turn) => void
}

const DashboardOrder = ({activeModal, addTurn}:props) =>{
    const [modal, setModal] = useState<boolean>(false)
    const [client, setClient] = useState<Turn>({
        id: '',
        time: 0,
        table: 0,
        }) 

    const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement >) => { 
        setClient({...client,[e.currentTarget.name]: e.currentTarget.value})
        console.log(client)
    }
    const createQr = () =>{
        addTurn(client)
        setModal(true)
    }
    const toggleModal = () => {
        activeModal()
    }
    const getID =async () => {
        const data = await axios.get('https://www.uuidtools.com/api/generate/v1')
        console.warn(data.data[0].substring(0,8))
        setClient({
            ...client, id:data.data[0].substring(0,8)
        })
    }
    useEffect(()=>{ 
            getID()
    },[])

    return(
        <>
        <div className={`${styles.window}`}>
            { !modal ?
            <div className={`${styles.modal}`}>
                <button className={`${styles.modalButton}`} onClick={ ()=> activeModal() }>X</button>
                <form className={`${styles.modalForm}`}>
                    <input 
                            type="text" 
                            name='id' 
                            placeholder='ID' 
                            onChange={handleChange} 
                            readOnly 
                            value={client.id}/>
                    <input 
                            type="number" 
                            name="table" 
                            placeholder="Numero de mesa"
                            onChange={handleChange}/>
                    <select 
                            title="timeSelect" 
                            name="time"
                            onChange={handleChange}>
                        <option>5min</option>
                        <option>10min</option>
                        <option>15min</option>
                        <option>20min</option>
                        <option>25min</option>
                        <option>30min</option>
                        <option>35min</option>
                        <option>40min</option>
                    </select>
                    <button type="button" onClick={createQr}>Generar orden</button>
                </form>
            </div>
            :
            <div>
                <button className={styles.modalButton} onClick={toggleModal} type='button'>X</button>
                <QrImage qrCode={client.id} />
            </div>
            }
        </div>
        </>
    )
}

export default DashboardOrder;