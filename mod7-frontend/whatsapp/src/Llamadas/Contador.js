import { useState, useEffect } from 'react';

function Contador() {
  const [n, setN] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setN(n => n + 1)
    }, 1000)

    return () => {
      clearInterval(t)
    }
  }, [])

  return (
    <div className="contador">
      Contador: {n}
      <button onClick={() => setN(n + 1)}>+1</button>
      <button onClick={() => setN(n - 1)}>-1</button>
    </div>
  );
}

export default Contador;
