const express = require('express')
const cors = require('cors')
const controller = require('./controller')

// Importamos multer y creamos una instancia
const multer  = require('multer')
const upload = multer()

// Configuramos nuestra app
const app = express()
app.use(cors())
app.use(controller.authMiddleware)
app.use(express.json())

// Creamos algunas rutas para nuestro ejemplo
app.get('/', controller.home)
app.post('/signup', controller.signup)
app.post('/login', controller.login)
app.get('/users', controller.getUsers)
app.get('/users/me', controller.getMe)
app.put('/users/me', upload.single('avatar'), controller.updateProfile)

// Servimos los ficheros estáticos de la carpeta uploads
app.use('/static', express.static('uploads'))

// Inicializamos el server
const port = process.env.PORT || 8080
app.listen(port)
console.log('Server listening on http://localhost:' + port)
