# File Upload Demo - Backend

Para ejecutar:

> npm install  
> npm start

Este proyecto levanta un servidor en [localhost:8080](http://localhost:8080) que implementa un sistema de subida de ficheros.

Para utilizarlo, levanta a la vez el frontend.

*NOTA*: El servidor no usa base de datos, por lo que todos los usuarios se pierden al parar el servidor.

## Cómo funciona

Para este ejemplo he elegido utilizar [multer](https://github.com/expressjs/multer), que es razonablemente simple y seguro para este tipo de tareas.

### Acceder a imágenes

Para poder acceder a los ficheros desde el navegador, hemos añadido esta línea al `server.js`:

```js
app.use('/static', express.static('uploads'))
```

Con esto le indicamos a express que queremos servir los archivos de la carpeta `uploads` bajo la ruta `/static`.

### Subir imágenes

Para crear el endpoint que admite subida de ficheros, hemos añadido una ruta así:

```js
app.put('/users/me', upload.single('avatar'), controller.updateProfile)
```

Esto indica a multer que sólo admita subir un único fichero (bajo el nombre de campo: `avatar`), que estará disponible (si se proporciona) en `req.file`.
El controller verificará si se ha recibido, y lo guardará en la carpeta de uploads con el nombre que le corresponda.
