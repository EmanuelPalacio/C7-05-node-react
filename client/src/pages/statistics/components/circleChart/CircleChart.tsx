import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { ListTurn } from '../../../../models/Turn';

const COLORS = ['#FF8042', 'rgb(var(--color-fourt))', 'rgb(var(--color-secondary))'];

export default function CircleChart({ data }: { data: ListTurn[] }) {
  const chartData = [
    {
      name: 'Con demora',
      quantity: 0,
    },
    {
      name: 'Sin demora',
      quantity: 0,
    },
  ];
  console.log('🚀 ~ file: CircleChart.tsx:17 ~ CircleChart ~ chartData:', chartData);
  data.forEach((e) => {
    if (e.state === 'delayed') {
      chartData[0].quantity++;
    } else {
      chartData[1].quantity++;
    }
  });
  return (
    <ResponsiveContainer height='80%' width='90%'>
      <PieChart>
        <Pie data={chartData} cx='50%' cy='50%' innerRadius={50} outerRadius={80} paddingAngle={5} dataKey='quantity' fill='#FF8042'>
          {chartData.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
