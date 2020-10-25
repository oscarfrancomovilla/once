// Variables
const borrarCarrito = document.getElementById('delete-cart')
const reservarButtons = document.querySelectorAll('.book')
const carritoLista = document.querySelector('.list-card')

// Funciones
// funcion que crea la lsita de cards en el carrito
const crearCarrito = lista => {
    carritoLista.innerHTML = ''
    lista.forEach(hotel => crearReserva(hotel))
}

// funcion que añade el hotel al carrito
const crearReserva = hotel => {
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

// funcion que carga los datos del localStorage
const loadToLocalStorage = () => JSON.parse(localStorage.getItem('reservas')) || []

// funcion que añade el hotel al localStorage
const addToLocalStorage = hotel => {
    const hotelesLista = loadToLocalStorage()
    const nuevaHotelesLista = [...hotelesLista, hotel]
    localStorage.setItem('reservas', JSON.stringify(nuevaHotelesLista))
    crearCarrito(nuevaHotelesLista)
}

// funcion que borra el hotel del localStorage
const removeToLocalStorage = id => {
    const hotelesLista = loadToLocalStorage()
    const nuevaHotelesLista = hotelesLista.filter(hotel => hotel.id !== id)
    localStorage.setItem('reservas', JSON.stringify(nuevaHotelesLista))
    crearCarrito(nuevaHotelesLista)
}

// funcion que borra todo el localStorage
const removeAllToLocalStorage = () => {
    localStorage.clear()
    const hotelesLista = loadToLocalStorage()
    crearCarrito(hotelesLista)
}

//funcion que lee los datos del hotel seleccionado
const leerDatosHotel = article => {
    const infoHotel = {
        img: article.querySelector('img').src,
        nombre: article.querySelector('h2').textContent,
        precio: article.querySelector('h3').textContent,
        id: article.getAttribute('data-id')
    }
    return infoHotel
}

// funcion que añade el hotel al carrito
const guardarReserva = e => {
    const hotel = leerDatosHotel(e.target.parentElement)
    addToLocalStorage(hotel)
}

// funcion que elimina el hotel del carrito
const eliminarReserva = e => {
    // aplicamos delegation cerciorandonos de que solo se haga el listener en el boton
    if(e.target.classList.contains('delete-card')){
        removeToLocalStorage(e.target.getAttribute('data-id'))
    }
}

// Listener
reservarButtons.forEach(button => {
    button.addEventListener('click', guardarReserva)
})

// tenemos que hacer delegation pues los botonoes de eliminar solo existen cuando se crean los nodos
carritoLista.addEventListener('click', eliminarReserva)

// listener para borrar todo el carrito
borrarCarrito.addEventListener('click', removeAllToLocalStorage)

// listener para cargar los datos de localStorage cuando el DOM  se ha cargado completamente
document.addEventListener('DOMContentLoaded', crearCarrito(loadToLocalStorage()))
