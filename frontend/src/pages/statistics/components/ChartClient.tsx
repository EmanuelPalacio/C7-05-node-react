/* import style from '../styles/statistiscs.module.css' */
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const ChartClient = ()=>{
    const options = {
        /* Establezca el estilo de la etiqueta del lienzo en un ancho y alto del 100%. Esto asegurará que siempre se ajuste al 100% del ancho y la altura de sus contenedores.
        Para el conjunto de valores de opciones responsive: true & maintenanceAspectRatio: false. Esto asegurará que el gráfico responda a las actualizaciones de tamaño mientras ignora la relación de aspecto.
        */
        responsive:true,
        maintainAspectRatio:false,
        animations:{
            tension:{
                duration: 5000,
                from: 1,
                to: 0.3,
            }
        },
    }
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
        label: 'Personas x Mes',
        data: [20,30,0,50,60,70,80],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Encuestas',
        data: [20,40,40,90,60,70,0],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
    return(
        <Line data={data} options={options}  />
    )
}
export default ChartClient;

