import { fetchApi } from '../../config';

export default async function refreshTokenService(auth: string) {
  return await fetchApi.get('/auth/refresh-token', auth);
}
