// Crear añadir un nodo
const link = document.createElement('a') // crea el elemnto (en la nada)
link.className = 'enlace' // añadir clase
link.id = 'nuevo'

link.setAttribute('href', 'https://google.com')
link.setAttribute('target', '_blank')

link.innerText = 'Google'

const text = document.createTextNode(' Link real') // en la nada

link.appendChild(text) // añado nodo a mayores en este texto

link.textContent = 'Google'

// console.log(link)


const section = document.querySelector('.section')

section.appendChild(link)

// console.log(section)

// Modificar y reemplazar nodos

const newHeading = document.createElement('h1')
newHeading.id = 'new-heading'
newHeading.appendChild(document.createTextNode('Nuevo Encabezado'))

const oldHeading = document.getElementById('title') // Localizamos el elemento a sustituir
const parent = oldHeading.parentElement

parent.replaceChild(newHeading, oldHeading)

console.log(oldHeading)

// Eliminar un nodo

const links = document.querySelectorAll('nav a')

const deleteLink = links[0]
deleteLink.remove()

const otherLink = links[3]

otherLink.parentElement.removeChild(otherLink)

console.log(links)

// Como crear y modificar atributos

const firstLi = document.querySelector('ul li')
firstLi.className = 'list'
firstLi.classList.add('new-class')
firstLi.classList.remove('list')
firstLi.setAttribute('data-id', '3244')
firstLi.hasAttribute('data-id') // true
firstLi.removeAttribute('data-id')
console.log(firstLi)
