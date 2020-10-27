USE tienda;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nif VARCHAR(20) UNIQUE,
    email VARCHAR(50) UNIQUE,
    nombre VARCHAR(50),
    direccion VARCHAR(100),
    telefono VARCHAR(20),
    fecha_alta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(128) NOT NULL
);

CREATE TABLE secciones (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(20),
    descripcion VARCHAR(100),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nombre VARCHAR(20) NOT NULL
);

CREATE TABLE pedidos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    numero_pedido VARCHAR(20) UNIQUE NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_entrega DATETIME,
    estado ENUM ('pagado', 'pendiente', 'devuelto', 'entregado'),
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(10) NOT NULL,
    nombre VARCHAR(50),
    descripcion VARCHAR(100),
    precio NUMERIC(10, 2) DEFAULT 0,
    imagen VARCHAR(100),
    fragil BOOLEAN
);

CREATE TABLE usuario_seccion (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    id_seccion INT UNSIGNED,
    FOREIGN KEY (id_seccion) REFERENCES secciones (id)
);

CREATE TABLE seccion_producto (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_seccion INT UNSIGNED,
    FOREIGN KEY (id_seccion) REFERENCES secciones (id),
    id_producto INT UNSIGNED,
    FOREIGN KEY (id_producto) REFERENCES productos (id)
);

CREATE TABLE pedido_producto (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT UNSIGNED,
    FOREIGN KEY (id_pedido) REFERENCES pedidos (id),
    id_producto INT UNSIGNED,
    FOREIGN KEY (id_producto) REFERENCES productos (id),
    precio NUMERIC(10, 2) DEFAULT 0
);

CREATE TABLE producto_producto (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_producto INT UNSIGNED,
    FOREIGN KEY (id_producto) REFERENCES productos (id),
    id_producto_relacionado INT UNSIGNED,
    FOREIGN KEY (id_producto_relacionado) REFERENCES productos (id)
);

SET FOREIGN_KEY_CHECKS = 1;