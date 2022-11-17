import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Nav from './components/Nav';
import { Login } from './views/Login/Login';
import Register from './views/Register/Register';
import Profile from './views/Profile/Profile';
import useToken from './hooks/useToken'


function App() {

  const { token, removeToken, setToken } = useToken();

  return (
      <BrowserRouter>
        <div className="App">
          <Nav token={removeToken}/>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
          {!token && token!=="" &&token!== undefined?  
          <Login setToken={setToken} />
          :(
            <>
              <Routes>
                <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
              </Routes>
            </>
          )}
          
        </div>
      </BrowserRouter>
  );
}

export default App;
