import { Switch, Route } from 'react-router-dom';
import Menu from './Users/Menu';
import UserViewer from './Users/UserViewer';
import { useState } from 'react';
import Login from '../Login';
import Register from '../Register';
import { useUser } from '../UserContext'
import './Users.css'

function Users() {
  const [isRegister, setRegister] = useState(false)

  const me = useUser()
  if (!me) {
    return (
      <div>
        {isRegister ? <Register /> : <Login />}
        <div onClick={() => setRegister(!isRegister)} className="toggle">
          {isRegister ? 'Ya tienes cuenta? Logeate' : 'No tienes cuenta? Registrate'}
        </div>
      </div>
    )
  }

  return (
    <div className="page users">
      <Menu />
      <main>
        <Switch>
          <Route path="/users/new">
            Crear usuario
          </Route>
          <Route path="/users/:id">
            <UserViewer />
          </Route>
          <Route path="/">
            Selecciona un usuario...
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default Users;
