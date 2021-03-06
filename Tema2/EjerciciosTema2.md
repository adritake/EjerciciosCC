# EJERCICIOS DEL TEMA 2

## Ejercicio 1. Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).

Hecho

## Ejercicio 2. Ejecutar un programa básico que trabaje con una base de datos en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

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

Solo se ha probado con una base de datos mySQL pero se podría operar con otro tipo de bases de datos sin problema siempre que se acceda correctamente desde el código javascript.

## Ejercicio 3. Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.

Ya se ha creado para el ejercicio anterior, ver [package.json](ProgramaPorra/package.json).

## Ejercicio 4. Descargar el repositorio de ejemplo anterior, instalar las herramientas necesarias (principalmente Scala y sbt) y ejecutar el ejemplo desde sbt. Alternativamente, buscar otros marcos para REST en Scala tales como Finatra o Scalatra y probar los ejemplos que se incluyan en el repositorio.


- Clonar el [repositorio](https://github.com/JJ/spray-test) del ejemplo de los apuntes con `git clone git://github.com/JJ/spray-test my-project`.

- Insalar escala con este [tutorial](http://codigolinea.com/2015/04/05/instalando-scala-en-linux/).

- Instala sbt siguiendo estos [pasos](https://www.scala-sbt.org/download.html).

- En el directorio del proyecto ejecutar sbt con el comando `sbt` en mi caso como uso un JDK 10 tengo que usar el comando `sbt -sbt-version 0.13.17` para que sea compatible.

- Ejecutar los comandos que aparecen en el [repositorio](https://github.com/JJ/spray-test) para aprender su funcionamiento.

- Para poder ejecutar la orden curl: `sudo apt-get install curl`.

## Ejercicio 5. Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

- Se ha añadido en el programa la linea `assert(!err);` para comprobar que la conexión a la base de datos se ha hecho correctamente.

## Ejercicio 7. Haced los dos primeros pasos antes de pasar al tercero.

- Se ha dado de alta en [Travis](https://travis-ci.org/).

- Se ha activado el repositorio [EjerciciosCC](https://github.com/adritake/EjerciciosCC).

- Se ha creado el archivo .travis.yml en el repositorio.






