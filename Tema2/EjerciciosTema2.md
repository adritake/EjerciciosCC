# EJERCICIOS DEL TEMA 2

## Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).

Hecho

## Ejecutar un programa básico que trabaje con una base de datos en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

- Se ha instalado mySQL en ubuntu.

- Se ha seguido este [tutorial](https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/) para conectarse a una base de datos de mySQL con javascript.

- Se ha creado una base de datos en mySQL siguiendo este [tutorial](https://www.linux-party.com/42-mysql/2214-como-crear-una-base-de-datos-mysql-e-inicializar-los-privilegios).

- Se ha creado una tabla en mySQL siguiendo este [tutorial](http://mysql.conclase.net/curso/?cap=007c).

`CREATE TABLE IF NOT EXISTS porras ( nombre varchar(50), apuesta varchar(10), partido varchar (50), PRIMARY KEY (nombre) )ENGINE=InnoDB;`

- Se han introducido los siguientes datos: 

~~~
INSERT INTO porras VALUES ('Adrian', '2-1', 'Granada-Malaga');
INSERT INTO porras VALUES ('Pepe', '2-2', 'Madrid-Barcelona');
INSERT INTO porras VALUES ('OptimusPrime', '200-0', 'Autobots-Decepticons');
~~~

- Para iniciar la base de datos de mySQL en su puerto predeterminado

`sudo mysql -h localhost -u adritake -p adritakepassword  porra`

- Una vez inicializado todo hay que ejecutar el programa usando el comando 'node index.js' y accediendo desde el navegador a la página [http://localhost:8000/](http://localhost:8000/).

Solo se ha probado con una base de datos mySQL pero se podría operar con otro tipo de bases de datos sin problema siempre que se acceda correctamente desde el código javascript


