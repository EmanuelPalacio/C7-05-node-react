import { database } from '../../config';
import { User } from '../../types/User';

export default function createUser(user: User): any {
  return database.query(`INSERT INTO users (
    uid,
    name,
    surname,
    companyName,
    email,
    password
  ) VALUES (
    ${user.uid},
    ${user.name},
    ${user.surname},
    ${user.companyName},
    ${user.email},
    ${user.password}
  )`);
}
