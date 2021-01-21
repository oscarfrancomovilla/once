import './App.css';
import { useState } from 'react';
import Header from './Header/Header';
import Chats from './Chats/Chats';
import Estados from './Estados/Estados';
import Llamadas from './Llamadas/Llamadas';

function App() {
  
  const [tab, setTab] = useState('Chats')

  return (
    <div className="App">
      <Header tab={tab} setTab={setTab} />

      {tab === 'Chats' &&
        <Chats />
      }

      {tab === 'Estados' &&
        <Estados />
      }

      {tab === 'Llamadas' &&
        <Llamadas />
      }

    </div>
  );
}

export default App;
