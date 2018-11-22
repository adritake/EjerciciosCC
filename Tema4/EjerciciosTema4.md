# Ejercicios del tema 4
## Previo

Antes de nada para realizar estos ejercicios necesitamos mínimo una máquina virtual.(Recomiendo comenzar a [descargar ubuntu](https://www.ubuntu.com/download/desktop) en este momento porque ocupa 1.8GB).Para no gastar dinero creando MV en plataformas como Azure, vamos a instalar la version 5.2 de [VirtualBox](https://www.virtualbox.org/) en Ubuntu 18.04 siguiendo este [tutorial](https://maslinux.es/como-instalar-virtualbox-en-ubuntu-18-04/).

A continuación vamos a crear una máquina virtual con Ubuntu 18.04 en virtualbox, para ello se ha seguido este [tutorial](https://linuxhint.com/install_ubuntu_18-04_virtualbox/).
Es necesario abrir los puertos de la MV para poder conectarte vía SSH. Para ello hay que ir a: *Máquina > configuración > Red > Avanzadas > Reenvío de puertos*. Una vez allí hay que darle a añadir nueva regla de reenvío y rellenarla con estos datos:
`Nombre:SSH Protocolo:TCP IP anfitrión:172.0.0.1 Puerto anfitrión:2222 IP invitado:10.0.2.15 Puerto invitado:22` (o los datos de tu máquina virtual)

## Ejercicio 2. Desplegar los fuentes de una aplicación cualquiera, propia o libre, que se encuentre en un servidor git público en la máquina virtual Azure (o una máquina virtual local) usando ansible.

Para realizar este ejercicio es necesario haber realizado el paso previo.

- Se va a usar Ansible para el despliegue de una aplicación en un máquina virtual. Para descargar Ansible hay que ejecutar los siguientes comandos:
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible
```
- Necesitamos la ip de la MV para poder conectarnos a ella remotamente, normalmente se usa el comando `ifconfig` pero en mi caso no estaba instalado así que he usado `ip a list`.
- Lo siguiente es añadir la ip de la MV al archivo */etc/ansible/hosts*. Para ello hay que abrir el archivo con tu editor favorito y con permisos de súper usuario, en mi caso he usado `sudo gedit /etc/ansible/hosts`. Una vez en el archivo hay que incluir las siguientes líneas:
```
[webservers]
<IP de la MV>
```
