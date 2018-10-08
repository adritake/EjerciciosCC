# EJERCICIOS DEL TEMA 1

## Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?

Como ejemplo voy a usar un programa que realizamos para la asignatura Estructuras de Datos de la carrera de Ingeniería Informática de la UGR.

El objetivo de este programa era realizar consultas a una base de datos de crímenes de Chicago. Los crímenes estaban almacenados en un archivo de texto el cual había que leer y almacenarlo en distintos tipos de contenedores (mapas, vectores, etc.). Junto a la base de datos se debía realizar una simple interfaz para introducir los datos de búsqueda y obtener los resultados. La interfaz realiza fue la propia terminal de Ubuntu.

Toda la aplicación estaba almacena de la manera usual en c++ (archivos de cabecera, fuentes, datos) en un solo ordenador por lo que claramente es un sistema monolítico. Para cambiar su estructura hay que pensar las distintas partes que componen la aplicación. Así se puede distinguir una parte que es la base de datos, la consulta de estos y por decir algo más, un sistema de identificación para acceder a la aplicación. Todos estas partes son independientes y se pueden modificar sin alterar a las otras. 

Por lo tanto, se podría usar un micro servicio para la identificación, otro servicio encargado de traducir los datos de búsqueda en consultas SQL o lo que proceda, según la forma que estén almacenados los datos y, por último, otro servicio con la base de datos en sí.


## En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?

La aplicación explicada en el ejercicio anterior estaba desarrollada en C++ pero por supuesto se podría desarrollar en cualquiero otro lenguaje como java o scala ya que permiten leer la base de datos y crear contenedores para trabajar con los datos.

Los contenedores usados en la práctica eran los básicos de la librería STL de C++. Estos contenedores funcionaban perfectamente ya que la estructura de los datos era fija (Código del delito, lugar, tipo, etc). Por este mismo motivo se podría crear una base de datos SQL ya que las relaciones entre datos están bien definidas y no se prevee que sufra cambios en un futuro.
