import { useState } from 'react'
import './Switch.css';

function Switch() {
  const [isOn, setOn] = useState(false)
  return (
    <div
      className={'switch ' + (isOn ? 'on' : 'off')}
      onClick={() => setOn(!isOn)}
    />
  );
}

export default Switch;
