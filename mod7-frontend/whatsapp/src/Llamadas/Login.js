import { useState } from 'react';
import './Login.css'

const secretUser = 'anonimo'
const secretPass = '1234'

function Login() {
  const [message, setMessage] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (user === secretUser && password === secretPass) {
      setMessage('Bienvenido!')
    } else {
      setMessage('Usuario o contraseña incorrecto')
    }
  }
  return(
    <form className="login" onSubmit= {handleSubmit}>
      <input value={user} onChange={e => setUser(e.target.value)}/>
      <input value={password} onChange={e => setPassword(e.target.value)}/>
      <button>Iniciar sesión</button>
      <div>{message}</div>
    </form>
  )
}

export default Login 
