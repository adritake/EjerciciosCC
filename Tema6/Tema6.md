# Ejercicios del tema 6: Orquestación
## Previo
Para instalar vagrant en mi ordenador me he descargado la última versión de linux de esta [página](https://www.vagrantup.com/downloads.html). Es un archivo binario que se debe ejecutar en la localización que esté ubicado. Para poder ejecutarlo como un programa instalado normalmente con apt-get lo he movido a una localización distinta y he modificado el archivo de alias de bash *~/.bash_aliases* añadiendo la siguiente línea: `alias vagrant=/home/adritake/Adrian/Utiles/vagrant`. Si escribo `vagrant -v` me aparece su versión que es *Vagrant 2.2.2*.
También es necesario tener instalado virtual box.

## Ejercicio 1. Instalar una máquina virtual Debian usando Vagrant y conectar con ella.

- Buscamos en la [página de box](https://www.vagrantbox.es/) de vagrant una imagen debian.
- Yo voy a usar la imágen *debian/jessie64*: `vagrant init debian/jessie64`
- `vagrant up` para crear la MV con esa imagen en Virtual Box.
- Para conectarte con ssh a la MV basta con escribir `vagrant ssh`. Yo he obtenido lo siguiente:
![vagrant shh](./img/vagrantssh.png)
