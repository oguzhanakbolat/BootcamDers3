import React from 'react'
import { useAuth } from '../context/AuthContext'
import Footer from './Footer'
import Header from './Header'
import Login from './Login'

const Layout = ({ children }) => {
  const { isAuth } = useAuth();

  return (
    <>
        {
          isAuth ?
            <>
              <Header />
              <main>
                  { children }
              </main>
              <Footer  />
            </>
          :
          <Login   />
        }
    </>
  )
}

export default Layout