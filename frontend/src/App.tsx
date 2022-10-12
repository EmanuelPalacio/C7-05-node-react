import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from './pages/client/Client';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Statistics from './pages/statistics/Statistics';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import useVerifyAuth from './hooks/useVerifyAuth';
import Register from './pages/register/Register';
import LayoutHeader from './components/LayoutHeader';
import Configuration from './pages/configuration/Configuration';

function App() {
  const [isAuthenticated] = useVerifyAuth();

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute isAuth={isAuthenticated} redirectTo='/dashboard' />}>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<PrivateRoute isAuth={isAuthenticated} redirectTo='/' />}>
            <Route element={<LayoutHeader />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/statistics' element={<Statistics />} />
              <Route path='/configuration' element={<Configuration />} />
            </Route>
          </Route>
          <Route path='/client/:turnId' element={<Client />} />
          <Route path='*' element={<h1 style={{ display: 'flex', justifyContent: 'center' }}>404 - Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
