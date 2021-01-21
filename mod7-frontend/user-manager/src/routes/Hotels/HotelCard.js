import { Link } from 'react-router-dom';

function HotelCard({ data }) {
  return (
    <Link to={'/hotel/' + data.id} className="card hotel">
      <h3>{data.name}</h3>
    </Link>
  );
}

export default HotelCard;
