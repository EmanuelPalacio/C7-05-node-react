import { API_URL } from '@/utils/config';
import axios from 'axios';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
interface rating {
  rate : number
}

const ChartRating = ()=>{
  const [rating, setRating] = useState<number[]>([0,0,0,0,0])
  const fetch =async () => {
    const data = await axios.get(`${API_URL}/ratings`)
    const list = data.data.map((element:rating)=> {return {response: element.rate}})
    const contador = [0,0,0,0,0]
    for (let i = 0; i < list.length; i++){
      switch (list[i].response) {
        case 1:
            contador[0] = contador[0] + 1;
          break; 
        case 2:
            contador[1] = contador[1] + 1;
          break; 
        case 3:
            contador[2] = contador[2] + 1;
          break;
        case 4:
            contador[3] = contador[3] + 1;
          break;
        case 5:
            contador[4] = contador[4] + 1;
          break;
      }
    }
    setRating(contador)
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
  labels: ['Muy malo', 'Malo', 'No sé', 'Bueno', 'Excelente'],
  datasets: [
    {
      data: rating,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        
      ],
      borderWidth: 1,
    },
  ],
  }
  useEffect(()=>{
    fetch()
    },[])

  return(
      <PolarArea data={data} options={options}/>
  )
}

export default ChartRating;