// Variables
const reservarButtons = document.querySelectorAll('.book')

// Funciones
// funcion que lee los datos del hotel seleccionado
const leerDatosHotel = article => {
    const infoHotel = {
        img: article.querySelector('img').src,
        nombre: article.querySelector('h2').textContent,
        precio: article.querySelector('h3').textContent,
        id: article.getAttribute('data-id')
    }
    console.log(infoHotel)
}

// funcion que añade un hotel al carrito
const guardarReserva = e => {
    leerDatosHotel(e.target.parentElement)
}

// Listeners
// hacemos un forEach para añadir un EventListener a cada boton
reservarButtons.forEach(button => {
    // queremos guardar el elemento
    button.addEventListener('click', guardarReserva)
})
