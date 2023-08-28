import { fetchApi } from '../../config';
import { UserRegister } from '../../models/User';

export default async function registerService(body: UserRegister): Promise<unknown> {
  return await fetchApi.post('/user/register', body);
}
