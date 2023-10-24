import { ResponsiveContainer, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Area } from 'recharts';
import { ListTurn } from '../../../../models/Turn';

export default function ChartLine({ data }: { data: ListTurn[] }) {
  const hours: Array<{
    hour: string;
    quantity: number;
  }> = [];

  for (let hour = 0; hour <= 23; hour++) {
    hours.push({
      hour: hour.toString().padStart(2, '0') + ':00',
      quantity: 0,
    });
  }
  data.forEach((element) => {
    const date = new Date(element.enddate).getHours();
    hours[date].quantity++;
  });
  return (
    <ResponsiveContainer width='90%' height='90%'>
      <AreaChart width={500} height={400} data={hours}>
        <CartesianGrid strokeDasharray='4 4' />
        <XAxis dataKey='hour' />
        <YAxis dataKey='quantity' />
        <Tooltip />
        <Area type='monotone' dataKey='quantity' stroke='rgb(var(--color-secondary))' activeDot={{ r: 8 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
