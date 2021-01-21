import { useState } from 'react'
import './Login.css';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    if (username === 'demo' && password === 'demo') {
      setStatus('ok')
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="login">
      {status !== 'ok' &&
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input value={username} onChange={e => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          {status === 'error' &&
            <div className="error">
              Usuario o contraseña incorrecto
            </div>
          }
          <button>Iniciar sesión</button>
          <div className="note">Prueba con demo/demo</div>
        </form>
      }
      {status === 'ok' &&
        <h1>Bienvenido!</h1>
      }
    </div>
  );
}

export default Login;
