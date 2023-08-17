import { Uid } from '../models/User';

interface JwtDecode {
  uid: Uid;
  exp: number;
  iat: number;
}
