import './Header.css';

function Header({ tab, setTab }) {

  const tabs = ['Chats', 'Estados', 'Llamadas']

  return (
    <header className="Header">
      <div className="first-row">
        <div>Whatsapp</div>
        <div>Lupa</div>
        <div>...</div>
      </div>
      <div className="second-row">
        <div>Camara</div>
        {tabs.map(t =>
          <div className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</div>
        )}
      </div>
    </header>
  );
}

export default Header;
