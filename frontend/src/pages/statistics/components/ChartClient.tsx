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
/* redux */
import { useAppSelector } from '@/redux/hooks';
interface months {
    x: string;
    y: number;
}

const ChartClient = ()=>{
    const listTurns = useAppSelector((state) => state.Turns);
    const month = (e:string) => new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date(e));
    const newList = listTurns.map(e => month(e.turnDate))
    const months:string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const datasets:Array<months> = []
    for (let i = 0; i <months.length; i++){
        datasets.push({x:months[i], y: (newList.filter(e => e === months[i]).length)})
    }
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
    

const data = {
    datasets: [
        {
        label: 'Personas x Mes',
        data:  datasets,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};
    return(
        <Line data={data} options={options}  />
    )
}
export default ChartClient;

