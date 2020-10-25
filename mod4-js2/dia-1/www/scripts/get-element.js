// Acceso a un nodo

let element = document.getElementById('formulario')
element = document.getElementById('formulario').className
element = document.getElementById('title').textContent // devuelve el texto interno
element = document.getElementById('title').innerText

element = document.getElementById('title')

element.style.background = '#bbb'
element.style.color = '#fff'

// Cambiar texto
const text = 'Otro texto'
element.textContent = 'No se que día'
element.innerText = text

// querySelector devuelve el primer elemento que coincida con el selector

element = document.querySelector('#title') // siempre que sea id con #, si es clase con .

element = document.querySelector('li a') // puedo usar tag, class, id o combinación

element = document.querySelector('li:last-child a') // cualquier selector que usaria en css

console.log(element)
