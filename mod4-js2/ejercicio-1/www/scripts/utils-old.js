// Variables
const form = document.getElementById('form')
const list = document.getElementById('list')

// Funciones
const crearElemento = mensaje => {
    const li = document.createElement('li')
    li.textContent = mensaje
    const button = document.createElement('button')
    button.classList = 'delete'
    button.textContent = 'x'
    li.appendChild(button)
    list.appendChild(li)
}

const enviarMensaje = e => {
    e.preventDefault()
    crearElemento(e.target.messageTextarea.value)
    e.target.messageTextarea.value = ''
}

const borrarElemento = e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
}

// Listeners
form.addEventListener('submit', enviarMensaje)
list.addEventListener('click', borrarElemento)
