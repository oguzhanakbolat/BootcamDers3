import React, { useRef } from 'react'
import {useAuth} from '../context/AuthContext';

const Login = () => {

    const { login } = useAuth();
    const inputRef = useRef()

    const submit = () => {
        if((inputRef.current.value).length > 2) {
            login(inputRef.current.value);
        }
        else {
            alert('Lütfen en az 3 karakter giriniz')
        }
    }

  return (
    <main>
        <div className='login'>
            <label>Kullanıcı Adı</label>
            <input ref={inputRef} type="text" placeholder='Kullanıc adını gir' />
            <button onClick={submit}>Giriş Yap</button>
        </div>
    </main>
  )
}

export default Login