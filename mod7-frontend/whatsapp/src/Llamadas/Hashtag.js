import { useState } from 'react';
import './Hashtag.css'

function Hashtag() {
  const [lista, setLista] = useState([])
  const handleSubmit = e => {
    e.preventDefault()
    setLista([...lista, e.target.entry.value])
    e.target.entry.value = '' // Limpiar input
  }

  const handleRemove = prod => {
    setLista(lista.filter(e => e !== prod))
  }
  
  return (
    <form className="tag-list" onSubmit={handleSubmit}>
      <span className="tags">
        {lista.map(prod =>
          <span key={prod} className="tag" onClick={() => handleRemove(prod)}>
            {prod}
          </span>
        )}
      </span>
      <input name="entry" />
    </form>
  );
}

export default Hashtag;
