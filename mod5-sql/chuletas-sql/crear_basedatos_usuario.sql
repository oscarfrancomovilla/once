-- Script-chuleta para crear una base de datos y un usuario, y asignarle a éste todos los privilegios sobre dicha base de datos
--  futbol es el nombre que queremos darle a la base de datos
--  marta es el nombre que queremos darle al usuario
--  passworddemarta es la contraseña que queremos asignarle al usuario 

CREATE DATABASE futbol;
CREATE USER marta IDENTIFIED BY 'passworddemarta';
GRANT ALL PRIVILEGES ON futbol.* TO marta;
