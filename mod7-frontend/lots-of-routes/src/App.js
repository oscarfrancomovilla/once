import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PreguntasLayout from './PreguntasLayout'

const FakeComponent = () => '...'
const ContactPage = FakeComponent
const AboutPage = FakeComponent
const UsuarioLayout = FakeComponent

function App() {
  return (
    <div className="app">
      <header>header...</header>
      <Switch>
        <Route path="/preguntas">
          <PreguntasLayout />
        </Route>
        <Route path="/usuario">
          <UsuarioLayout />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          Bienvenido!
        </Route>
      </Switch>
    </div>
  );
}

export default App;
