import { database } from '../../config';
import { User } from '../../types/user';

export default async function createUser(user: User): Promise<void> {
  const query = {
    text: 'INSERT INTO users (uid, name, surname, companyName, email, password) VALUES($1, $2, $3, $4, $5, $6)',
    values: [user.uid, user.name, user.surname, user.companyName, user.email, user.password],
  };

  await database(query);
}
