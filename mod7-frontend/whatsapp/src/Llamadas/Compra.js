import { useState } from 'react';

function Compras() {
  const [lista, setLista] = useState([])
  const handleSubmit = e => {
    e.preventDefault()
    setLista([...lista, e.target.entry.value])
  }

  return (
    <div className="compras">
      <ul>
        {lista.map(prod =>
          <li>{prod}</li>
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="entry" />
        <button>Añadir</button>
      </form>
    </div>
  );
}

export default Compras;
