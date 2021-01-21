import useFetch from '../../useFetch'
import './Users.css'

function Users() {
  const users = useFetch('http://localhost:8080/users')

  return (
    <div className="section users">
      <h2>Usuarios</h2>
      {!users && 'Cargando...'}
      {users &&
        <table>
          <thead>
            <tr>
              <th>Img</th>
              <th>Usuario</th>
              <th>Nombre completo</th>
              <th>Email</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              const avatarStyle = user.avatar && { backgroundImage: 'url(' + user.avatar + ')' }
              return (
                <tr key={user.id}>
                  <td><div className="avatar" style={avatarStyle} /></td>
                  <td>{user.username}</td>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </div>
  );
}

export default Users;
