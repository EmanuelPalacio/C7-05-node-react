import createTableFoods from './Foods';
import createTableUser from './User';

export default function createTableModels() {
  createTableUser();
  createTableFoods();
}
