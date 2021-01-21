import { useState } from 'react'
import { useSetUser } from './UserContext'
import { login } from './api'
import './Login.css';

function Login() {
  const setMe = useSetUser()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setError] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const data = await login(username, password)
    if (data.token) {
      setMe(data)
    } else {
      setError(true)
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        {isError &&
          <div className="error">
            Usuario o contraseña incorrecto
          </div>
        }
        <button>Iniciar sesión</button>
        <div className="note">Prueba con demo/demo</div>
      </form>
    </div>
  );
}

export default Login;
