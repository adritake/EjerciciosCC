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


