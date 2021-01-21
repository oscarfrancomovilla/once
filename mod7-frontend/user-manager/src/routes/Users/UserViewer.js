import { useUserById } from '../../api'
import UserEditor from './UserEditor'
import { useParams } from 'react-router-dom'

function UserViewer() {
  const { id } = useParams()
  const user = useUserById(id)

  if (!user) return 'Loading ...'

  return (
    <div className="user">
      <h2>{user.name}</h2>
      <ul>
        <li>ID: {user.id}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.address && user.address.city}</li>
      </ul>
      <UserEditor key={user.id} user={user} />
    </div>
  )
}

export default UserViewer
