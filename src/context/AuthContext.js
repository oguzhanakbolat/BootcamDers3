import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const Provider = ({ children }) => {
    const [user, setUser] = useState('');
    const [isAuth, setIsAuth] = useState(false);
  
    const logout = () => {
      setUser('');
      setIsAuth(false);
     localStorage.removeItem('user');
    }
  
    const login = data => {
      setUser(data);
      setIsAuth(true);
      localStorage.setItem('user', data)
    }
    useEffect(() => {
      const data = localStorage.getItem('user');
      if(data) {
        setUser(data);
        setIsAuth(true);
      }
    }, []);
  
    const AuthContextValue = {
      user,
      logout,
      login,
      isAuth,
    };

    return (
        <AuthContext.Provider value={AuthContextValue}>
          { children }
        </AuthContext.Provider>
    );
};

export default Provider;
export { useAuth };