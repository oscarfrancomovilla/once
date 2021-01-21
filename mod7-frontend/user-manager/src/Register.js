import { useState } from 'react'
import { useSetUser } from './UserContext'
import { register } from './api'
// import './Register.css';

function Register() {
  const setMe = useSetUser()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setError] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const data = await register(username, password, email)
    if (data.token) {
      setMe(data)
    } else {
      setError(true)
    }
  }

  return (
    <div className="login register">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        {isError &&
          <div className="error">
            Error de registro
          </div>
        }
        <button>Registrar</button>
      </form>
    </div>
  );
}

export default Register;
