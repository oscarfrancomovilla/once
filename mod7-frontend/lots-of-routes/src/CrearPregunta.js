const Login = () => 'Login...'

function CrearPregunta() {
  if (false) {
    return (
      <div>
        Para crear preguntas tienes que iniciar sesión.
        <Login />
      </div>
    )
  }

  return (
    <div>
      Crear pregunta...
    </div>
  );
}

export default CrearPregunta;
