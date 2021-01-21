import { useState, useEffect } from 'react'

function UserViewer() {

  const [user, setUser] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div>
      {user && user.name}
    </div>
  )
}

export default UserViewer
