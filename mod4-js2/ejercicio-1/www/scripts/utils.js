// Variables
const form = document.querySelector('#form')
const list = document.querySelector('#list')

const setList = messages => {
    // Sincronizar localStorage con la lista
    localStorage.setItem('messages', JSON.stringify(messages))
    // borrar la lista hasta ahora
    list.innerHTML = ''
    // lista cada elemento de localStorage y crea un li con el texto y boton
    messages.forEach((text, i) => {
        const li = list.appendChild(document.createElement('li'))
        li.textContent = text
        const button = li.appendChild(document.createElement('button'))
        button.classList = 'delete'
        button.textContent = 'x'
        button.addEventListener('click', () => removeFromLocalStorage(i))
    })
}

const loadFromLocalStorage = () => JSON.parse(localStorage.getItem('messages'))

const addToLocalStorage = message => {
    const messages = loadFromLocalStorage() || []
    const newMessages = [...messages, message]
    setList(newMessages)
}
const removeFromLocalStorage = index => {
    const newMessages = loadFromLocalStorage() // si pones const x = array.splice(index, 1) lo que guardas es ese elemento
    newMessages.splice(index, 1)
    setList(newMessages)
}

const handleMessage = e => {
    e.preventDefault()
    const message = e.target.messageTextarea.value    // Leer el valor de textarea
    message && addToLocalStorage(message)
    e.target.messageTextarea.value = ''
}

form.addEventListener('submit', handleMessage)  // Añadir mensaje el form
document.addEventListener('DOMContentLoaded', setList(loadFromLocalStorage()))
