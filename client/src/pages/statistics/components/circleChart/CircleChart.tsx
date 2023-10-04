import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Demorados', value: 30 },
  { name: 'Sin demora', value: 100 },
];
const COLORS = ['#FF8042', 'rgb(var(--color-fourt))', 'rgb(var(--color-secondary))'];
export default function CircleChart() {
  return (
    <ResponsiveContainer height='80%' width='90%'>
      <PieChart>
        <Pie data={data} cx='50%' cy='50%' innerRadius={50} outerRadius={80} paddingAngle={5} dataKey='value' fill='#FF8042'>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
