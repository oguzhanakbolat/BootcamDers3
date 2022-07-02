import React, { useRef } from 'react'

const Login = ({ login }) => {

    const inputRef = useRef()

    const submit = () => {
        if((inputRef.current.value).length > 2) {
            login(inputRef.current.value);
        }
        else {
            alert('Lütfen en az 3 karakter giriniz')
        }
    }

    console.log(login)

  return (
    <div className='login'>
        <label>Kullanıcı Adı</label>
        <input ref={inputRef} type="text" placeholder='Kullanıc adını gir' />
        <button onClick={submit}>Giriş Yap</button>
    </div>
  )
}

export default Login