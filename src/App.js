import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Nav from './components/Nav';
import { Login } from './views/Login/Login';
import Register from './views/Register/Register';
import NextGames from './views/NextGames/NextGames';
import { createTheme, ThemeProvider } from '@mui/material';
import MyStats from './views/MyStats/MyStats';

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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter >
        
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/proximosjuegos' element={<NextGames />} />
          <Route path='/estadisticas' element={<MyStats />} />
          <Route path='/games/:gameid' element={<NextGames />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
