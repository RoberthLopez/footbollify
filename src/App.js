import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import Nav from './components/Nav';
import { Login } from './views/Login/Login';
import Register from './views/Register/Register';
import { createTheme, ThemeProvider } from '@mui/material';import Profile from './views/Profile/Profile';
import useToken from './hooks/useToken'


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
    </ThemeProvider>
  );
}

export default App;
