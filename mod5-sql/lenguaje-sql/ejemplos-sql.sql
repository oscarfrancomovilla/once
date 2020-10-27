-- Registra un equipo de futbol con todos los campos
INSERT INTO equipos (nombre, patrocinador, color_camiseta_1, color_camiseta_2, categoria)
VALUES ('Real Madrid', 'Teka', 'blanco', 'rojo', 'alevin');

-- Registra un equipo de futbol con algunos campos
INSERT INTO equipos (nombre, patrocinador, categoria)
VALUES ('Celta de Vigo', 'Estrella Galicia', 'Cadete');

-- Visualiza el contenido de la tabla equipos
SELECT * FROM equipos;

-- Modifica un campo
UPDATE equipos
SET color_camiseta_2 = 'verde'
WHERE nombre = 'Real Madrid';

-- Modifica dos campos
UPDATE equipos
SET color_camiseta_1 = 'azul', color_camiseta_2 = 'amarillo'
WHERE nombre = 'Celta de Vigo';

-- Pasa a categoria juvenil todos los equipos que sean cadete
UPDATE equipos
SET categoria = 'juvenil'
WHERE categoria = 'cadete';

-- Modifica un campo para todos los equipos de la tabla
UPDATE equipos
SET categoria = 'Senior';

-- Eliminar un equipo
DELETE FROM equipos
WHERE nombre = 'Celta de Vigo';

-- Eliminar todos los datos de una tabla
DELETE FROM equipos;