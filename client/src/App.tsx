import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { IsAuthenticated } from './utils';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<IsAuthenticated />}>
        <Route path='/dashboard' element={<h1>hola</h1>} />
      </Route>
    </Routes>
  );
}
