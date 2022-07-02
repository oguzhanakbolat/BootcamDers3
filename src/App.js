import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import List from './List';
import Home from './Home';
import Aboutus from './AboutUs';
import './App.css';
import { useState } from 'react';
import LoginPage from './LoginPage';

function App() {
  const [user, setUser] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const logout = () => {
    setUser('');
    setIsAuth(false);
  }

  const login = data => {
    setUser(data);
    setIsAuth(true);
  }


  return (
    <>
      {
        isAuth &&
        <Header  user={user} logout={logout} />
      }
      
      <Routes>
        {
          isAuth ?
          <>
            <Route path='/' element={<Home user={user}  />} />
            <Route path='/list' element={<List  user={user}/>} />
            <Route path='/about' element={<Aboutus  user={user} />} />
          </>
          :
          <Route path='/' element={<LoginPage login={e => login(e)} />} />
        }
      </Routes>
    </>
  );
}

export default App;
