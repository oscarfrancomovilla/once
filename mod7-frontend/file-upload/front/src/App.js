import Header from './App/Header';
import Main from './App/Main';
import Auth from './Auth/Auth';
import { useUser } from './UserContext';
import './App.css';

function App() {
  const me = useUser()

  return (
    <div className="App">
      <Header />
      {me ? <Main />: <Auth />}
    </div>
  );
}

export default App;
