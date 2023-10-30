import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from './components/loading/Loading';

const { ProtectedRoute, PublicRoute, Home, Register, Turns, Statistics, Scan, CustomerView } = {
  PublicRoute: lazy(() => import('./components/layout/PublicRoute')),
  ProtectedRoute: lazy(() => import('./components/layout/ProtectedRoute')),
  Home: lazy(() => import('./pages/home/Home')),
  Register: lazy(() => import('./pages/register/Register')),
  Turns: lazy(() => import('./pages/turns/Turns')),
  Statistics: lazy(() => import('./pages/statistics/Statistics')),
  Scan: lazy(() => import('./pages/scan/Scan')),
  CustomerView: lazy(() => import('./pages/customerView/CustomerView')),
};

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<PublicRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Navigate replace to='/dashboard/turns' />} />
          <Route path='/dashboard/turns' element={<Turns />} />
          <Route path='/dashboard/statistics' element={<Statistics />} />
        </Route>
        <Route path='/dashboard/scan' element={<Scan />} />
        <Route path='scan/:uid/:id' element={<CustomerView />} />
        <Route path='/*' element={<Navigate replace to='/404' />} />
        <Route path='/404' element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
}
