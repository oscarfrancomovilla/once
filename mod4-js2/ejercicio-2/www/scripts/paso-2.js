// Variables
const reservarButtons = document.querySelectorAll('.book')
const carritoLista = document.querySelector('.list-card')

// Funciones
// funcion que añade el hotel al carrito
const insertarReserva = hotel => {
    const card = document.createElement('div')
    card.className = 'cart-card'
    card.id = 'cart-card-' + hotel.id
    card.innerHTML = `
        <img src="${hotel.img}" alt="${hotel.nombre} imagen">
        <section>
            <h4 class="name">${hotel.nombre}</h4>
            <h6 class="price">${hotel.precio}</h6>
            <button class="delete-card" data-id="${hotel.id}">Eliminar</button>
        </section>

    `
    carritoLista.appendChild(card)
}

//funcion que lee los datos del hotel seleccionado
const leerDatosHotel = article => {
    const infoHotel = {
        img: article.querySelector('img').src,
        nombre: article.querySelector('h2').textContent,
        precio: article.querySelector('h3').textContent,
        id: article.getAttribute('data-id')
    }
    insertarReserva(infoHotel)
}

// funcion que añade el hotel al carrito
const guardarReserva = e => {
    leerDatosHotel(e.target.parentElement)
}

// funcion que elimina el hotel del carrito y utilizamos delegation
// para que se ejecute el código solo en caso de click en el boton
const eliminarReserva = e => {
    if (e.target.classList.contains('delete-card')){
        e.target.parentElement.parentElement.remove()
    }
}

// Listeners
// hacemos un forEach para añadir un listener a cada boton
reservarButtons.forEach(button => {
        // queremos guardar el elemento
    button.addEventListener('click', guardarReserva)
})

// Añadimos addEventListener al elemento que existe desde el principio
// por que los botones aún no existen
carritoLista.addEventListener('click', eliminarReserva)