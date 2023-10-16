import { fetchApi } from '../../config';
import { TurnUpdate } from '../../models/Turn';

export default async function updateTurn({ body, auth }: { body: TurnUpdate; auth: string }) {
  return await fetchApi.put('/turn/update', body, auth);
}
