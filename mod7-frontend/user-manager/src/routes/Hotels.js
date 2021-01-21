import HotelCard from './Hotels/HotelCard'

function Hotels() {
  // Los Card serían un map con datos de la API
  return (
    <div className="page hotels">
      <h1>Nuestros hoteles</h1>
      <p>Visite los hoteles de nuestra cadena blablabla...</p>
      <div>
        <HotelCard data={{id: 1, name: "Sol Melia"}} />
        <HotelCard data={{id: 2, name: "Experia"}} />
        <HotelCard data={{id: 3, name: "Holiday Inn"}} />
        <HotelCard data={{id: 4, name: "San Martín"}} />
      </div>
    </div>
  );
}

export default Hotels;
