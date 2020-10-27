-- Create Read   Update Delete
-- INSERT SELECT UPDATE DELETE

-- Registro de un usuario

INSERT INTO usuarios (nif, email, nombre, direccion, telefono, usuario, password)
VALUES (?, ?, ?, ?, ?, ?, SHA2(?, 512));

INSERT INTO usuarios (nif, email, nombre, direccion, telefono, usuario, password)
VALUES ('322323', 'ada@hotmail.com', 'Espinete', 'Barrio sesmano', '4343434', 'espi', SHA2('espi384849ghg9hg', 512));

-- Inicio de sesión

SELECT id
FROM usuarios
WHERE usuario = ? AND password = SHA2(?, 512);

-- Editar perfil

 -- 1. Cargar los datos del usuario en un formulario para visualiarlos/editarlos
 
 SELECT nif, email, nombre, direccion, telefono, usuario
 FROM usuarios
 WHERE id = ?;
 
 -- 2. El usuario ha hechos sus cambios y pulsa en el botón 'Guardar'
 
 UPDATE usuarios
 SET nif = ?, email = ?, nombre = ?, direccion = ?, telefono = ?, usuario = ?
 WHERE id = ?;
 
-- Modificar la contraseña de un usuario

UPDATE usuarios
SET password = ? -- contraseña nueva
WHERE id = ? AND password = ?; -- contraseña antigua

-- 'Me olvidé de la contraseña'

 -- 1. Necesitas haberle solicitado al usuario el email en algún momento
 -- 2. Se envía al usuario un enlace generado dinámicamente para llevarlo a una web donde pueda volvera poner su contraseña
 
 UPDATE usuarios
 SET password = ? -- contraseña nueva
 WHERE id = ?;

-- Búsqueda de productos ('ver todo')

SELECT id, nombre, precio, imagen
FROM productos
ORDER BY valoracion DESC;

-- Búsqueda de productos por precio (entre 2 cantidades)

SELECT id, nombre, precio, imagen
FROM productos
WHERE precio BETWEEN ? AND ?;

-- Búsqueda de productos por precio y marca (cuidado que el campo marca no existe en la base de datos)

SELECT id, nombre, precio, imagen
FROM productos
WHERE precio BETWEEN ? AND ? AND marca = ?;

-- Búsqueda por cualquier campo

SELECT id, nombre, precio, imagen
FROM productos
WHERE nombre LIKE '%?%' OR descripcion LIKE '%?%' OR marca LIKE '%?%'; -- ? es siempre el mismo valor

-- Cargar los datos de un producto concreto (el usuario hace click en un producto concreto tras realizar la búsqueda)

SELECT nombre, precio, imagen, codigo, descripcion
FROM productos
WHERE id = ?;

-- Listado de pedidos de un usuario (Mis Pedidos)

SELECT numero_pedido, fecha, fecha_entrega, estado
FROM pedidos
WHERE id_usuario = ?
ORDER BY fecha DESC;

-- Listado de últimos productos comprados

SELECT pedidos.numero_pedido, pedidos.fecha, productos.nombre, pedido_producto.precio, productos.descripcion
FROM productos, pedido_producto, pedidos
WHERE pedidos.id_usuario = ?
      AND pedidos.id = pedido_producto.id_pedido AND pedido_producto.id_producto = productos.id
ORDER BY pedidos.fecha DESC;

-- Eliminar un producto

DELETE FROM productos
WHERE id = ?;

-- Modificar el precio de un producto

UPDATE productos
SET precio = ?
WHERE id = ?;

-- 'Usuario quiere seguir a otro usuario'

-- Añadir un producto relacionado con otro

-- Registrar un producto (con imagen)

-- Registrar un pedido

-- Eliminar un pedido

-- Dar de baja a un usuario


