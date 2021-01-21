import { Link } from 'react-router-dom'
import { useUser } from '../UserContext';
import './Header.css';

function Header() {
  const me = useUser()

  // Si hay avatar, creamos un style para ponerlo como background
  // Se podría usar un img, pero aquí nos viene mejor así por temas de diseño
  const avatarStyle = me && me.user.avatar && { backgroundImage: 'url(' + me.user.avatar + ')' }

  return (
    <header>
      <Link to="/" className="logo">File Upload Demo</Link>
      {me &&
        <div className="user">
          <div className="avatar" style={avatarStyle} />
          <div className="name">
            {me.user.displayName || me.user.username}
          </div>
        </div>
      }
    </header>
  );
}

export default Header;
