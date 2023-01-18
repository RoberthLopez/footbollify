import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Nav from './components/Nav';
import HomePage from './views/HomePage/HomePage';
import { Login } from './views/Login/Login';
import Register from './views/Register/Register';
import NextGames from './views/NextGames/NextGames';
import Profile from './views/Profile/Profile';
import NotFound from './views/NotFound/NotFound';
import MyStats from './views/MyStats/MyStats';
import useToken from './hooks/useToken';
import GameDescription from './components/GameDescription/GameDescription';
import './App.css';

import Groups from './views/Groups/Groups';

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
              <Route path='/login' element={<Login setToken={setToken} />}/>
              <Route path='/register' element={<Register setToken={setToken} />}/>
              <Route path='/proximosjuegos' element={<NextGames />} />
              <Route path='/estadisticas' element={<MyStats />} />
              <Route path='/proximosjuegos/:gameDay/:gameMatch' element={<GameDescription />} />
              <Route path="/groups" element={<Groups />} />
              {!token && token!=="" ?  //Si no esta logeado, y quiere entrar a profile
                (<Route path="/profile" element={<Login setToken={setToken}/>}/>)  //pide login
              : (
                  <Route path="/profile" element={<Profile token={token} setToken={setToken}/>}/>
                )}
              <Route path="*" element={<NotFound />} />
              
            </Routes>
            
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
