import { Switch, Route } from 'react-router-dom';
import CrearPregunta from './CrearPregunta'


function PreguntasLayout() {
  return (
    <div className="page-body">
      <aside>
        Menu...
      </aside>
      <main>
        <Switch>
          <Route path="/preguntas" exact>
            Bienvenido a la seccion de preguntas...
          </Route>
          <Route path="/preguntas/new" exact>
            <CrearPregunta />
          </Route>
          <Route path="/preguntas/:id" exact>
            Estas viendo la pregunta #id.
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default PreguntasLayout;
