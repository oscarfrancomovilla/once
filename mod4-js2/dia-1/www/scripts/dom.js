// DOM
let element = document // acceso a todo el DOM

element = document.all // HTMLCollection que te muestra una colección (algo parecido a un array) con todos los nodos
element = document.all[10] // devuelve el elemento con indice 10

element = document.head
element = document.body
element = document.domain // nos devuelve el dominio

element = document.URL // nos devuelve el dominio
element = document.links // nos devuelve HTMLCollection con todos los 'a'
element = document.forms

element = document.forms[0]

element = document.forms[0].id
element = document.forms[0].className // como un string
element = document.forms[0].classList // como un array

element = document.images[2].getAttribute('src')
element = document.images[2].getAttribute('alt')
console.log(element)


const images = document.images
console.log(images)

const imagesArr = Array.from(images) // para transformar collection en array


imagesArr.forEach(image => {
    console.log(image)
})