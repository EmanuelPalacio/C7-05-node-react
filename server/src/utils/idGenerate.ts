import { v4 as uuidv4 } from 'uuid';
import { Uid } from '../types/userRequest';

export default function idGenerate(): Uid {
  const id = uuidv4() as Uid;
  return id;
}
