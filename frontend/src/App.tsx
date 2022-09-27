import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

// import reactLogo from './assets/react.svg';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
