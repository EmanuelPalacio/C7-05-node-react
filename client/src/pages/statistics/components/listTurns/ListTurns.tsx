import { ListTurn } from '../../../../models/Turn';
import Timer from '../timer/Timer';
import style from './style.module.css';

export default function ListTurns({ arrayList, select }: { arrayList: ListTurn[]; select: (data: ListTurn) => void }) {
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
            <tr key={i} onClick={() => select(e)}>
              <td>
                <span>#</span>
                {e.id}
              </td>
              <td>
                <Timer endDate={e.enddate} />
              </td>
              <td>{e.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
