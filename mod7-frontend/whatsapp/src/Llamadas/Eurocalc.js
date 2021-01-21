import { useState } from 'react'

function Eurocalc() {
  
  const [eur, setEur] = useState(0)

  return (
    <div className="eurocalc">
      <div>
        <input
          value={eur}
          onChange={e => setEur(e.target.value)}
          type="number"
        /> EUR
      </div>
      <div>
        <input
          value={eur * 166.386}
          onChange={e => setEur(e.target.value / 166.386)}
          type="number"
        /> pts
      </div>
    </div>
  );
}

export default Eurocalc;
