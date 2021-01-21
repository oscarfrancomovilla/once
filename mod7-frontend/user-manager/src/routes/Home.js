import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home">
      <h1>Portada...</h1>
      <ul>
        <li><Link to="/users">Usuarios</Link></li>
        <li><Link to="/hotels">Hoteles</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
      </ul>
    </div>
  );
}

export default Home;
