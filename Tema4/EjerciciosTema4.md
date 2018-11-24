# Ejercicios del tema 4
## Previo

Antes de nada para realizar estos ejercicios necesitamos mínimo una máquina virtual.(Recomiendo comenzar a [descargar ubuntu](https://www.ubuntu.com/download/desktop) en este momento porque ocupa 1.8GB).Para no gastar dinero creando MV en plataformas como Azure, vamos a instalar la version 5.2 de [VirtualBox](https://www.virtualbox.org/) en Ubuntu 18.04 siguiendo este [tutorial](https://maslinux.es/como-instalar-virtualbox-en-ubuntu-18-04/).

A continuación vamos a crear una máquina virtual con Ubuntu 18.04 en virtualbox, para ello se ha seguido este [tutorial](https://linuxhint.com/install_ubuntu_18-04_virtualbox/).
Es necesario abrir los puertos de la MV para poder conectarte vía SSH. Para ello hay que ir a: *Máquina > configuración > Red > Avanzadas > Reenvío de puertos*. Una vez allí hay que darle a añadir nueva regla de reenvío y rellenarla con estos datos:
`Nombre:SSH Protocolo:TCP IP anfitrión:nada Puerto anfitrión:2222 IP invitado:nada Puerto invitado:22` Esto quiere decir que cualquier ip puede conectarse a tu máquina virtual por ese puerto (be careful)
Además es necesario instalar el ssh server en la MV: `sudo apt-get install openssh-server`.

Para evitar tener que escribir la contraseña cada vez que nos conectemos a la MV necesitamos copiar la clave de nuestra máquina principal a la MV. Si no tienes un par de claves, genera uno escribiendo en la consola: `ssh-keygen`. Ahora hay que copiar la clave pública a la MV, para ello: `ssh-copy-id -i ~/.ssh/id_rsa.pub <usuario>@localhost -p 2222`. Para ver si se ha hecho correctamente, ejecutar: `ssh -p 2222 <usuario>@localhost` y comprobar que se tiene acceso sin escribir la contraseña.

## Ejercicios 2 y 3. Desplegar los fuentes de una aplicación cualquiera, propia o libre, que se encuentre en un servidor git público en la máquina virtual Azure (o una máquina virtual local) usando ansible. Desplegar la aplicación que se haya usado anteriormente con todos los módulos necesarios usando un playbook de Ansible.

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
<NombreHost> ansible_port=2222 ansible_host=127.0.0.1 (el de tu MV)
```
- Para hacerle ping a la MV con ansible es necesario que tenga instalado python, en mi caso no lo tenía y he instalado la utilidad de python necesaria para esta tarea: `sudo apt-get install python-simplejson`.
- Ahora es el momento de probar con ansible que la MV está desplegada, para ello ejecutar `ansible all -m ping -u adritake`. Si todo está correctamente, debería devolver:
```json
MIMV | SUCCESS => {
    "changed": false,
    "invocation": {
        "module_args": {
            "data": "pong"
        }
    },
    "ping": "pong"
}
```
- El último paso es desplegar una aplicación en la MV usando Ansible, en mi caso voy a desplegar mi [proyecto](https://github.com/adritake/CC_UGR_Personal.git) de Cloud Computing. Hay que crear un playbook para indicar todos los estados que tiene que alcanzar la MV. El playbook que he creado es el siguiente:

```
---
- hosts: webservers
  user: adritake

  vars:
    - packages: ["git","npm"]
    - project_location: /home/adritake/projects

  tasks:
    - name: Install {{ packages }}
      become: yes
      become_user: root
      apt:
        name: "{{ packages }}"
        state: present

    - name: Create project location
      file:
        path: "{{ project_location }}"
        state: directory

    - name: Download repository
      git:
        repo: https://github.com/adritake/CC_UGR_Personal.git
        dest: "{{ project_location}}"

    - name: Install dependencies
      npm:
        path: "{{ project_location }}"

    - name: Install pm2
      become: yes
      become_user: root
      command: npm install pm2 -g

    - name: Start service
      command: pm2 start {{ project_location }}/IssueBot.js

```

- Para ejecutar el playbook hay que asegurarse de que la MV está funcionando y ejecutar en el ordenador principal: `ansible-playbook MyPlaybook.yml --ask-become-pass`. El comando *--as-become-pass* hace que te pregunte la contraseña para hacerse sudo en la MV.
- Al ejecutar el playbook debería salir como respuesta:

```
PLAY [webservers] **************************************************************

TASK [Gathering Facts] *********************************************************
ok: [MIMV]

TASK [Install [u'git', u'npm']] ************************************************
changed: [MIMV]

TASK [Create project location] *************************************************
changed: [MIMV]

TASK [Download repository] *****************************************************
changed: [MIMV]

TASK [Install dependencies] ****************************************************
changed: [MIMV]

TASK [Install pm2] *************************************************************
changed: [MIMV]

TASK [Start service] ***********************************************************
changed: [MIMV]

PLAY RECAP *********************************************************************
MIMV                       : ok=7    changed=6    unreachable=0    failed=0   
```
