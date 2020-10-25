// Storage (Local y Session)

const miStorage = window.localStorage
console.log(miStorage)

// Nos permite añadir y guardar info en el navegador del usuario
localStorage.setItem('nombre', 'ObiWan')
sessionStorage.setItem('profesion', 'Jedi')
// la diferencia radica en que cuando cierre el navegador el session se va a borrar

localStorage.setItem('profesion', 'Jedi')
// podríamos añadir más

const nombre = localStorage.getItem('nombre')
console.log(nombre)

// Eliminar
localStorage.removeItem('profesion')

localStorage.clear() // borra todo

// localStorage solo nos permite guardar un string como value por cada key

const datosPersonaje = {'nombre': 'ObiWAn', 'profesión': 'Jedi'}
// guardo el objeto como un string
localStorage.setItem('datos', JSON.stringify(datosPersonaje))

//obtengo el string salvado y lo vuelvo a tranformar en un objeto
const guardado = JSON.parse(localStorage.getItem('datos'))

console.log(guardado)
