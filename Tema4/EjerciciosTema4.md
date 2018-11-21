# Ejercicios del tema 4
## Previo

Antes de nada para realizar estos ejercicios necesitamos mínimo una máquina virtual.(Recomiendo comenzar a [descargar ubuntu](https://www.ubuntu.com/download/desktop) en este momento porque ocupa 1.8GB).Para no gastar dinero creando MV en plataformas como Azure, vamos a instalar la version 5.2 de [VirtualBox](https://www.virtualbox.org/) en Ubuntu 18.04 siguiendo este [tutorial](https://maslinux.es/como-instalar-virtualbox-en-ubuntu-18-04/).

A continuación vamos a crear una máquina virtual con Ubuntu 18.04 en virtualbox, para ello se ha seguido este [tutorial](https://linuxhint.com/install_ubuntu_18-04_virtualbox/).

## Ejercicio 1. Instalar chef-solo en la máquina virtual que vayamos a usar

Para realizar este ejercicio es necesario haber realizado el paso previo.

- Dentro de la máquina virtual creada, [descargamos chef](https://downloads.chef.io/chefdk#ubuntu). Yo me he descargado la versión para ubuntu 18.04
- Ejecutar el archivo descargado con el gestor de software de Ubuntu. Esto comenzará la instalación.
- Cuando finalice la instalación, ejecutar en un terminal `chef-solo -v` para confirmar que se ha instalado correctamente. Debería aparecer algo como: `Chef: 14.7.17`.


