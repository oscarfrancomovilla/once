// Acceso a varios nodos

// getElementsByClassName devuelve todos los elemntos con esa clase en una colección
let sections = document.getElementsByClassName('section')

sections[2].style.background = 'red'

sections = document.getElementById('principal').getElementsByClassName('section')

console.log(sections)

// getElementsByTagName devuelve todos los elementos con ese tag de html

let links = document.getElementsByTagName('a')

links[2].style.color = 'red'

// Si queremos aplicarle métodos o acceder a las propiedades necesitamos transformar en un array
links = Array.from(links)
links.forEach(link => console.log(link.textContent))

links = document.querySelectorAll('li:nth-child(odd) a')

links.forEach(link => console.log(link.textContent))

console.log(links)
