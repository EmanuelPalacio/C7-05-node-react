import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '../config';
export default function webTokenDecode(token: string) {
  const verify = jwt.verify(token, TOKEN_KEY);
  if (verify) {
    return jwt.decode(token, TOKEN_KEY);
  } else {
    throw new Error('Token not valid');
  }
}
