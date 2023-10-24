import { fetchApi } from '../../config';
import { GenerateTurn, TurnResponse } from '../../models/Turn';

export default async function registerTurn(body: GenerateTurn, auth: string): Promise<TurnResponse> {
  return await fetchApi.post('/turn/create', body, auth);
}
