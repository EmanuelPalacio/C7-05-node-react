import createTableTurns from './Turn';
import createTableUser from './User';

export default async function createTableModels() {
  try {
    await createTableUser();
    await createTableTurns();
  } catch (error) {
    console.log('🚀 ~ file: index.ts:9 ~ createTableModels ~ error:', error);
  }
}
