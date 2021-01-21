import { useState } from 'react'
import './TaskList.css';

function TaskList() {
  
  const [entries, setEntries] = useState([])
  const [next, setNext] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    setEntries([...entries, next])
    setNext('')
  }
  
  return (
    <div className="task-list">
      <ul className="entries">
        {entries.map((tab, i) =>
          <li key={i} className="entry">
            {tab}
          </li>
        )}
      </ul>
      <form className="next" onSubmit={handleSubmit}>
        <input
          value={next}
          onChange={e => setNext(e.target.value)}
          placeholder="Escribe aquí y pulsa intro"
        />
      </form>
    </div>
  );
}

export default TaskList;
