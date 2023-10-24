import { fetchApi } from '../../config';
import { UserLogin } from '../../models/User';
import { LoginResponse } from '../../types/query';

export default async function loginService(body: UserLogin): Promise<LoginResponse> {
  return await fetchApi.post('/auth/login', body);
}
