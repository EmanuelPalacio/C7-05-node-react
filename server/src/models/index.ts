import createTableFoods from './Foods';
import createTableUser from './User';

export default async function createTableModels() {
  await createTableUser();
  await createTableFoods();
}
