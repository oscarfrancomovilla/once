import { Link, useParams } from 'react-router-dom';

function Hotel() {
  const { id } = useParams()
  return (
    <div className="page hotels">
      <Link to="/hotels">Volver</Link>
      <h1>Hotel nº. {id}</h1>
      <p>Estos serían los datos del hotel...</p>
    </div>
  );
}

export default Hotel;
