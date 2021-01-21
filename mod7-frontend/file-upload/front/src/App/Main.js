import { Link, Switch, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Users from './Routes/Users'
import Profile from './Routes/Profile'
import './Main.css'

function Main() {
  return (
    <div className="body">
      <aside className="navbar">
        <h2>Secciones</h2>
        <ul>
          <li><Link to="/">Portada</Link></li>
          <li><Link to="/users">Usuarios</Link></li>
          <li><Link to="/users/me">Mi perfil</Link></li>
        </ul>
      </aside>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/users/me" exact>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default Main;
