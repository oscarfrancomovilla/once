import Header from './Header';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Users from './routes/Users';
import About from './routes/About';
import Home from './routes/Home';
import Hotels from './routes/Hotels';
import Hotel from './routes/Hotel';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/hotels">
          <Hotels />
        </Route>
        <Route path="/hotel/:id">
          <Hotel />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
