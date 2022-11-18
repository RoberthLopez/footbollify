import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import HomePage from './views/HomePage';
import Nav from './components/Nav';
import { Login } from './views/Login/Login';
import Register from './views/Register/Register';
import Profile from './views/Profile/Profile';
import useToken from './hooks/useToken';
import './App.css';

function App() {
  const theme = createTheme({
    palette: {
      mode:"light",
      primary: {
        main: "#8d1c3d"
      },
      secondary:{
        main:"#63a194"
      }
    }
  })

  const { token, removeToken, setToken } = useToken();

  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <div className="App">
            <Nav token={removeToken}/>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
            </Routes>
            {!token && token!=="" &&token!== undefined ?  //Si no esta logeado, y quiere entrar a profile
              <Login setToken={setToken} />  //pide login
              : (
                <>
                   <Routes> {/*sino, va a la ruta de profile */}
                    <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
                  </Routes>
                </>
                )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
