// Window

// Algunos metodos del objeto Window

// console.log('hola')
// window.alert('Hola')
// alert('Hola')
// confirm('Si sí o si no')
// window.prompt('¿Una pregunta?')

// Algunas propiedades

let anchura,
    altura
altura = window.innerHeight
anchura = innerWidth

console.log(altura, anchura)

// location
let ubicacion = window.location

// Esto nos devuelve cosas como el protocolo
// puede servir para verificar el protocolo https:// (ej: pagos en linea)
ubicacion = location.search
// si la url tiene una query podemos acceder a ella '?s=busqueda'

console.log(ubicacion)

// podemos redireccionar cambiando el valor de href

// window.location.href = 'https://google.com'

// history
console.log(history)
// window.history.back()
// window.history.go(-2)

//navigator
let navegador = window.navigator

navegador = navegador.appName // devuelve Netscape siempre que no sea explorer
navegador = navigator.userAgent // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
navegador = navigator.language // es-ES

console.log(navegador)
