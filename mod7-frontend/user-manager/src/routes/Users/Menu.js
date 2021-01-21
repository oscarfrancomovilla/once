import { Link } from 'react-router-dom'
import { useUserList } from '../../api'
import { useSetUser } from '../../UserContext'

import './Menu.css'

function Menu() {

  const users = useUserList()
  const setMe = useSetUser()

  if (!users) return 'Loading ...'

  return (
    <aside className="menu">
      <h2>Usuarios</h2>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link to={'/users/' + user.id}>{user.name}</Link>
          </li>
        )}
      </ul>
      <Link to="/users/new">Crear nuevo</Link>
      <button onClick={() => setMe()}>Logout</button>
    </aside>
  )
}

export default Menu
