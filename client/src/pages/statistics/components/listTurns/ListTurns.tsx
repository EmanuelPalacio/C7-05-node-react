import { ListTurn } from '../../../../models/Turn';
import style from './style.module.css';

export default function ListTurns({ arrayList }: { arrayList: ListTurn[] }) {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>tiempo</th>
          <th>nombre</th>
        </tr>
      </thead>
      <tbody>
        {arrayList.map((e, i) => {
          return (
            <tr key={i}>
              <td>
                <span>#</span>
                {e.id}
              </td>
              <td>{e.time}</td>
              <td>{e.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
