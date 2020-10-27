USE hackaboss;

CREATE TABLE IF NOT EXISTS equipos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) UNIQUE NOT NULL,
    patrocinador VARCHAR(50),
    color_camiseta_1 VARCHAR(50),
    color_camiseta_2 VARCHAR(50),
    categoria VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS jugadores (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE,
    direccion VARCHAR(50),
    telefono VARCHAR(20),
    id_equipo INT UNSIGNED,
    FOREIGN KEY (id_equipo) REFERENCES equipos (id)
);

CREATE TABLE IF NOT EXISTS partidos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    campo VARCHAR(50) NOT NULL,
    arbitro VARCHAR(50),
    incidencia VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS equipo_partido (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_equipo INT UNSIGNED,
    FOREIGN KEY (id_equipo) REFERENCES equipos (id),
    id_partido INT UNSIGNED,
    FOREIGN KEY (id_partido) REFERENCES partidos (id)
);