import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Register, Turns } from './pages';
import { ProtectedRoute, PublicRoute } from './components';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/:id' element={<p>hola</p>} />
      </Route>
      <Route path='/' element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<Navigate replace to='/dashboard/turns' />} />
        <Route path='/dashboard/turns' element={<Turns />} />
        <Route path='/dashboard/statistics' element={<h1>statistics</h1>} />
      </Route>
      <Route path='/*' element={<Navigate replace to='/404' />} />
      <Route path='/404' element={<h1>404</h1>} />
    </Routes>
  );
}
