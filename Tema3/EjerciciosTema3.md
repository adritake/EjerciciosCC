#Ejercicios del tema 3
#Desplegando aplicaciones en la nube: Uso de PaaS y DBaaS

##Ejercicio1. Darse de alta en algún servicio PaaS tal como Heroku, zeit, BlueMix u OpenShift.

- Se procede a dar de alta en [Heroku](https://www.heroku.com/).
- Se selecciona python como lenguaje principal
- Se seleccionan 456 autobuses en el captcha.
- Tras dar error en la selección de autobuses se seleccionan 1564 bocas de incendio.
- También se ha dado de alta en [OpenShift](https://www.openshift.com/).

##Ejercicio2. Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.

- Se va a realizar el [tutorial](https://devcenter.heroku.com/articles/getting-started-with-python) de python de Heroku para desplegar una aplicación.
- Instalar el CLI de Heroku con: `sudo snap install heroku --classic`.
- Hacer login en Heroku con: `heroku login`.
- Descargar el repositorio: `git clone https://github.com/heroku/python-getting-started.git`
- Crear app en Heroku: `heroku create`.
- Desplegar código: `git push heroku master`.
- `heroku ps:scale web=1` para asegurarse que al menos una instancia de la aplicación está ejecutándose.
- `heroku open` para abrir acceder a la aplicación con el buscador.
- Tras numerosos problemas con dependecias y la version de python no he sido capaz de desplegar la aplicación localmente. Sin embargo si he podido desplegarla en heroku.
