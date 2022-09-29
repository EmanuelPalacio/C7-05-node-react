import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from './pages/client/Client';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

// import reactLogo from './assets/react.svg';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/client/:turnId' element={<Client />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
