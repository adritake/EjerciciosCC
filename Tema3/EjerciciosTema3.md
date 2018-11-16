# Ejercicios del tema 3
# Desplegando aplicaciones en la nube: Uso de PaaS y DBaaS

## Ejercicio1. Darse de alta en algún servicio PaaS tal como Heroku, zeit, BlueMix u OpenShift.

- Se procede a dar de alta en [Heroku](https://www.heroku.com/).
- Se selecciona python como lenguaje principal
- Se seleccionan 456 autobuses en el captcha.
- Tras dar error en la selección de autobuses se seleccionan 1564 bocas de incendio.
- También se ha dado de alta en [OpenShift](https://www.openshift.com/).

## Ejercicio2. Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.

- Se va a realizar el [tutorial](https://devcenter.heroku.com/articles/getting-started-with-python) de python de Heroku para desplegar una aplicación.
- Instalar el CLI de Heroku con: `sudo snap install heroku --classic`.
- Hacer login en Heroku con: `heroku login`.
- Descargar el repositorio: `git clone https://github.com/heroku/python-getting-started.git`
- Crear app en Heroku: `heroku create`.
- Desplegar código: `git push heroku master`.
- `heroku ps:scale web=1` para asegurarse que al menos una instancia de la aplicación está ejecutándose.
- `heroku open` para abrir acceder a la aplicación con el buscador.
- Tras numerosos problemas con dependecias y la version de python no he sido capaz de desplegar la aplicación localmente. Sin embargo si he podido desplegarla en heroku.

## Ejercicio3. Realizar una app en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.

- Creamos la app con: `express ejercicio3`.
- `cd` al archivo creado.
- Usamos `npm install` para instalar las dependencias.
- El código creado en el archivo _app.js_ es el siguiente:
~~~
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.put('/ejercicio3/:nombre/:dificultad',
	function (req, response){
	
		var mensaje = req.params.nombre + " piensa que el ejercicio 3 tiene un grado de dificultad " + req.params.dificultad;

		response.send(mensaje);

	});

app.get('/ejercicio',
	function(request,response){
		response.send("Has abierto la página del ejercicio 3");
	});



app.listen(app.get('port'), 
	function() {
		console.log("Node app is running at localhost:" + 			app.get('port'));
	});
~~~

- Para usar la orden PUT hay que ejecutar el programa con `node app.js` y luego escribir en otra terminal la orden `curl -X PUT http://127.0.0.1:5000/Adrian/4`.
- Para usar la orden GET se ejecuta el programa de igual manera que en el punto anterior y se buscar en el explorador [http://localhost:5000/ejercicio](http://localhost:5000/ejercicio).


## Ejercicio4. Crear pruebas para las diferentes rutas de la aplicación.

- Creamos la app con: `express ejercicio4`.
- `cd` al archivo creado.
- Usamos `npm install` para instalar las dependencias.
- El código de _app.js_ es igual al ejercicio 3.
- Instalamos supertest con `npm install supertest --save-dev`
- Creamos el directorio /test y dentro de el creamos un archivo llamado _mitest.js_ el cual tiene el siguiente código:

~~~
var request = require('supertest'),
app = require('../app.js');

describe( "PUT ejercicio3", function() {
	it('should create', function (done) {
	request(app)
		.put('/ejercicio3/Adrian/4')
		.expect('Content-Type', 'text/html; charset=utf-8')
		.expect(200,done);
	});
});
~~~

- Una vez hecho esto ejecutamos el comando `mocha` en el directorio del programa para comprobar si pasa los tests.

## Ejercicio 5. Instalar y echar a andar tu primera aplicación en Heroku.

Ya se ha realizado en el ejercicio 2.

## Ejercicio 6. Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

- Instalar foreman con este [tutorial](https://www.theforeman.org/manuals/1.19/index.html#2.1Installation).
- Ejecutar `sudo apt-get install ruby-foreman`
- Crear el archivo _Procfile_ en la aplicación e incluirle `web: node app.js`
- Por alguna razón no consigo instalar correctamente _foreman-installer_ y cuando ejecuto `foreman start web` me dice que no reconoce el comando `node app.js`

## Ejercicio 7. Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow

- Snap CI no se encuentra disponible por lo que se va a probar con [codeship](https://elements.heroku.com/addons/codeship)
- Para instalar el addon hay que seleccionar el proyecto pero pide introducir una tarjeta de crédito (cosa que de momento no voy a hacer)
- Crear una aplicación de node.js con express: `express ejercicio7`
- Usar este [tutorial](https://medium.com/@grantspilsbury/build-and-deploy-a-node-express-server-to-heroku-in-10-steps-70c936ab15dc) para crear una aplicación de node y subirla a heroku.
- Seguir el [tutorial de wercker](https://devcenter.wercker.com/quickstarts/platforms/heroku/) para heroku.
- Darse de alta en [wercker](https://www.oracle.com/corporate/acquisitions/wercker/).
- Crear manualmente el archivo wercker.yml en el repositorio `touch wercker.yml`
- Introducir en el archivo el siguiente texto:

~~~
# This references the default nodejs container from
# the Docker Hub: https://registry.hub.docker.com/_/node/
# Read more about containers on our dev center
# http://devcenter.wercker.com/docs/containers/index.html
box: node
# This is the build pipeline. Pipelines are the core of wercker
# Read more about pipelines on our dev center
# http://devcenter.wercker.com/docs/pipelines/index.html

build:
  # The steps that will be executed on build
  # Steps make up the actions in your pipeline
  # Read more about steps on our dev center:
  # http://devcenter.wercker.com/docs/steps/index.html
  steps:
    # A step that executes `npm install` command
    - npm-install
    # A step that executes `npm test` command
    - npm-test

    # A custom script step, name value is used in the UI
    # and the code value contains the command that get executed
    - script:
        name: echo nodejs information
        code: |
          echo "node version $(node -v) running"
          echo "npm version $(npm -v) running"
~~~

- `git add wercker.yml` y `git add profile` para añadir los archivos al repositorio.

- Subimos los archivos a heroku con `git push heroku master`
- En la página de [Wercker](https://app.wercker.com/applications/create) seleccionamos una nueva aplicacón en otro tipo de git y le damos el link de github de nuestra aplicación en heroku, en mi caso: `https://git.heroku.com/shrieking-broomstick-57252.git`
- Te pide que subas la key publica al repositorio, para eso hay que guardar la key en un archivo y subirla al repositorio con `heroku keys:add <ruta_key>`.
- Añadir el webhook que te indica con: `heroku webhooks:add -i api:dyno -l notify -u  <link_webhook>`
- Me da error en la creación de la app y no sé cómo continuar. El resto consiste en crear un objetivo de despligue para que cuando hagamos push tenga que ser pasando por el build de wercker.

## Ejercicio 8. Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.

- En lugar de trabajar con las aplicaciones anteriores se va a crear una nueva para tener un control de todas las aplicaciones creadas. `express Ejercicio8`.
- Para subirla a Openshift se sigue este [tutorial](https://blog.openshift.com/run-your-nodejs-projects-on-openshift-in-two-simple-steps/).












