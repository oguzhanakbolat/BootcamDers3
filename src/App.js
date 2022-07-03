import { Route, Routes } from 'react-router-dom';
import List from './List';
import Home from './Home';
import Aboutus from './AboutUs';
import AuthProvider from './context/AuthContext';
import SettingProvider from './context/SettingContext';
import Layout from './component/Layout';
import './App.css';

function App() {
  return (
    <>
      <AuthProvider>
        <SettingProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home   />} />
              <Route path='/list' element={<List  />} />
              <Route path='/about' element={<Aboutus  />} />
            </Routes>
          </Layout>
        </SettingProvider>
      </AuthProvider>
    </>
  );
}

export default App;
