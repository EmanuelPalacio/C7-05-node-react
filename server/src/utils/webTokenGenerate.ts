import jwt from 'jsonwebtoken';
import { KEY_GENERATE_TOKEN } from '../config';

export default function webTokenGenerate(id: string): string {
  const token = jwt.sign(
    {
      uid: id,
    },
    KEY_GENERATE_TOKEN,
    {
      algorithm: 'HS256',
      expiresIn: 60 * 120, // 120 minutes
    }
  );
  return token;
}
