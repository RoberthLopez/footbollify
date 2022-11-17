import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Nav from './components/Nav';
import { Login } from './views/Login/Login';
import Register from './views/Register/Register';
import Profile from './views/Profile/Profile';


function App() {
  return (
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
