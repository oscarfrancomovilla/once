// Traversing

// es poder recorrer los nodos de el DOM (de una forma que el css no puede)
const main = document.querySelector('#principal')

let nodes = main.childNodes
// childNodes devuelve una nodeList con todos los nodos; los espacios y saltos de linea son nodos de texto

nodes = main.children
// children devuelve una colección que habría que transformarla en array

nodes = nodes[3].nodeType
// 1 = Elemento HTML
// 2 = Atributo
// 3 = Textos
// 8 = Comentarios
// 9 = Documentos
// 10 = Doctype

console.log(nodes)

let nav = document.querySelector('nav')
nav = nav.children[0].children[1].children[0].textContent
nav = document.querySelector('nav').lastChild // accede al último nodo en este caso un espacio vacío (text)
nav = document.querySelector('nav').lastElementChild // último hijo que es un elemento
nav = document.querySelector('nav').firstElementChild // primer hijo que es un elemento
nav = document.querySelector('nav').previousElementSibling // hermano anterior
nav = document.querySelector('nav').nextElementSibling // null por que no tiene hermanos menores
nav = document.querySelector('nav').childElementCount // cuenta el número de hijos que son elementos
// esta es la forma de ir descendiendo a traves de los nodos de el DOM

console.log(nav)


// Ahora vamos a ver como subir y acceder a los ancestros
const links = document.querySelectorAll('nav a')

let link = links[0]

link = link.parentNode // Acede al padre
link = link.parentElement // Acede al elemento padre recomendado para acostumbrarse a trabajar con elements

link = links[2].parentElement.parentElement.parentElement.previousElementSibling
link.innerText = 'hola'

console.log(link)