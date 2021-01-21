import { useState } from 'react'
import './Spinner.css';

function Spinner() {
  const [value, setValue] = useState(0)
  return (
    <div className="spinner">
      <button onClick={() => setValue(value - 1)}>
        -
      </button>

      <div className="display">
        {value}
      </div>

      <button onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  );
}

export default Spinner;
