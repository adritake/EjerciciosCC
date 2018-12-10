# Ejercicios del tema 5: Automatización de tareas en la nube

## Ejercicio 1. Crear una máquina virtual Ubuntu e instalar en ella un servidor nginx para poder acceder mediante web.

- Instalamos el CLI de azure con `npm install -g azure-cli`.
- Nos logueamos con el CLI: `azure login` y seguimos los pasos indicados.
- Como prueba vamos a ver la lista de imágenes que podemos obtener con azure: `azure vm image list`. Este comando te pedirá una localización de los servidores y un publisher. Vamos a probar la localización *westeurope* y el publisher *canonical* para ver las imágenes de Ubuntu disponibles en los servidores de Europa occidental.
- Ahora vamos a crear un grupo de recursos donde alojar nuestra MV:
`azure group create grupoTema5 francecentral`. Debería de devolver algo como `info:    group create command OK`. Se ha elegido Francia central como localización porque *westeurope* no me dejaba crear la MV.
- Vamos a usar el comando `azure vm quick-create` para crear una MV de manera fácil e interactiva. Rellenamos los campos de la siguiente manera:
```
Resource group name:  grupoTema5
Virtual machine name:  MVEje1
Location name:  francecentral
Operating system Type [Windows, Linux]:  Linux
ImageURN (in the format of "publisherName:offer:skus:version") or a VHD link to the user image:  canonical:UbuntuServer:18.04-LTS:18.04.201812060
User name:  adritake
Password: ***************
Confirm password: ***************
```
- Probamos a conectarnos a la MV mediante ssh con `ssh adritake@40.89.153.58` donde la ip es la que me ha devuelto azure al crear la MV.
- Instalamos nginx con `sudo apt-get install nginx`
- Nota: si no se tiene conexión a internet en la máquina hay que abrir el puerto 80 con `sudo ufw allow http` y el puerto 443 con `sudo ufw allow https`
- Una vez instalado nginx si accedemos mediante un explorador a http://40.89.153.58/ (ip de la MV) debería aparecer un mensaje de bienvenida.
