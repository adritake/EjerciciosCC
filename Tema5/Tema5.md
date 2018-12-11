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

## Ejercicio 2.Crear una instancia de una máquina virtual Debian y provisionarla usando alguna de las aplicaciones vistas en el tema sobre herramientas de aprovisionamiento

- Seguimos las instrucciones de instalación del CLI de Azure proporcionadas por la [documentación de Microsoft](https://docs.microsoft.com/es-es/cli/azure/install-azure-cli-apt?view=azure-cli-latest)
- Usamos `az login` para loguearnos. Te redigirá al explorador.
- Instalamos jq para poder hacer queries a objetos JSON: `sudo apt-get install jq`
- Al igual que en el ejercicio anterior creamos un grupo de recursos con `az group create -l francecentral -n grupoTema5` y debería devolver un objeto JSON que contenga una clave "provisioningState" cuyo valor sea "Succeeded".
- El comando para crear la MV es el siguiente: `az vm create --resource-group grupoTema5 --name MVEje2 --image credativ:Debian:8:latest --generate-ssh-keys --output json --verbose`. Esto creará una MV con el grupo de recursos *grupoTema5*, con una imagen Debian y se copiará la clave pública alojada en id_rsa para poder conectarnos a la MV mediante ssh.
- El paso anterior deberá devolver una JSON donde aparecerá la IP pública de la MV. Vamos a comprobar el estado de la MV conectandonos mediante ssh a ella. `ssh 40.89.153.243` no es necesario dar un usuario puesto que accedemos mediante clave privada.
- Vamos a provisionar la MV con Ansible, para ello añadimos al archivo */etc/ansible/hosts* las siguientes líneas:
```
[webservers]
MIMV ansible_host=40.89.153.243
```
- Usamos una playbook parecido al de mi repositorio de la asignatura solo que con algunas adaptaciones para debian. [PlayBook](./MyPlaybook.yml).
- Ejecutamos `ansible-playbook MyPlaybook.yml` y una vez se ha instalado todo podemos acceder al servicio desde el explorador en http://40.89.155.89/
