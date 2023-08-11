import { v4 as uuidv4 } from 'uuid';
import { Uid } from '../types/User';

export default function idGenerate(): Uid {
  const id = uuidv4() as Uid;
  return id;
}
