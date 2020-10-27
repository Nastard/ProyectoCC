# ProyectoCC
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
>Proyecto a desarrollar de la asignatura Cloud Computing del Máster en Ingeniería Informática, curso 2020-2021.

# Descripción del proyecto
Se va a desarrollar una aplicación sobre La Liga Santander, la Primera División de España de fútbol, llamado SoccerGoal.\
Esta aplicación nos dirá cuando se juega un partido, el resultado del mismo, la clasificación general de La Liga, las estadísticas principales de los jugadores, posibles alineaciones y puntos fantasy de cada jugador.

# Herramientas
El desarrollo de esta aplicación se va a realizar con la ayuda de **node.js**, en lenguaje JavaScript. Los datos aque vayamos a usar los almacenaremos en **PostgreSQL**, con la ventaja de que dispone interfaz web. Para el desarrollo de test, usaremos **Mocha** para ejecutarlos y testearlos. Si para un futuro es necesario usar entornos virtuales, usaremos **nvm** de node.js. Como herramientas de construcción usaremos **Grunt**.

# Arquitectura
Se va a utilizar una arquitectura basada en microservicios. Como se puede dividir el proyecto en diversas funcionalidades, se propone crear un microservicio para  para la clasificación, otra para los equipos y jugadores, y otra para la jornada. Cada funcionalidad tendrá su base de datos, por lo que son independientes aunque se conecten entre sí y no dependerán de los datos de otro. Estas funcionalidades son:
- *Clasificación*: se verá la clasificación de los diferentes equipos, junto con una serie de datos adicionales como goles a favor y en contra, etc.
- *Equipos*: Equipos de la competición junto con sus datos.
- *Jugadores*: Jugadores de la competición, junto con algunos datos.
- *Jornada*: Información de los partidos de una jornada.

Cabe destacar que al ser necesario en algunos casos que se conecten entre sí, generen cuellos de botella.
Para comunicarse con estos microservicios, se hará mediante una API. Y usando la API, se podrá gestionar los diferentes microservicios o visualizar sus datos.

# Milestones, issues y user-stories
Milestones y user-stories creados:
- [Hito0](https://github.com/Nastard/SoccerGoal-ProyectoCC/milestone/1)
	- [Documentación inicial](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/1)
	- [Descripción del proyecto](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/2)
	- [Subir licencia y gitignore](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/3)
	- [Actualizar documentación inicial](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/4)
- [Hito1](https://github.com/Nastard/SoccerGoal-ProyectoCC/milestone/2)
	- [Mover README.md antiguo](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/18)
	- [Nuevo README.md](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/19)
	- [Archivo cc.yaml](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/20)
	- [Subida de estructura inicial](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/21)
	- [Actualizar .gitignore](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/22)
- [[US] Historias de usuario, administrador](https://github.com/Nastard/SoccerGoal-ProyectoCC/milestone/3)
	- [[US1] Como administrador, necesito poder subir los datos de cada jornada, con sus alineaciones y puntos fantasy.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/5)
	- [[US2] Como administrador, necesito poder modificar los datos de cada jornada.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/6)
	- [[US3] Como administrador, necesito poder subir los datos de cada equipo.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues7)
	- [[US4] Como administrador, necesito poder subir los datos de cada jugadores.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues8)
	- [[US5] Como administrador, necesito poder modificar los datos de cada equipo.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues9)
	- [[US6] Como administrador, necesito poder modificar los datos de cada jugador.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues10)
	- [[US7] Como administrador, necesito poder modificar la clasificación general.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/11)
- [[US] Historias de usuario, clientes](https://github.com/Nastard/SoccerGoal-ProyectoCC/milestone/4)
	- [[US8] Como usuario, necesito poder visualizar los datos de cada jugador.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/12)
	- [[US9] Como usuario, necesito poder visualizar los datos de cada equipo.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/13)
	- [[US10] Como usuario, necesito poder visualizar la clasificación general.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/14)
	- [[US11] Como usuario, necesito poder visualizar los resultados de cada jornada.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/15)
	- [[US12] Como usuario, necesito poder visualizar la alineación de cada jornada.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/16)
	- [[US13] Como usuario, necesito poder visualizar los puntos fantasy de cada jugador.](https://github.com/Nastard/SoccerGoal-ProyectoCC/issues/17)

# Clases
Se han creado unas clases iniciales para el proyecto. Estas se encuentran en la carpeta [src](https://github.com/Nastard/ProyectoCC/tree/main/src/) de este repositorio. Son las siguientes clases:
- Clase [Clasificación](https://github.com/Nastard/ProyectoCC/tree/main/src/Clasificacion.js): Para ver la clasificación de los equipos.
- Clase [Equipos](https://github.com/Nastard/ProyectoCC/tree/main/src/Equipos.js): Para ver la clasificación de los equipos.
- Clase [Jornada](https://github.com/Nastard/ProyectoCC/tree/main/src/Jornada.js): Para ver la clasificación de los equipos.
- Clase [Jugadores](https://github.com/Nastard/ProyectoCC/tree/main/src/Jugadores.js): Para ver la clasificación de los equipos.

# Otra documentación
Antiguo [fichero](https://github.com/Nastard/ProyectoCC/tree/main/docs/READMEv0.1.md) del repositorio.  
La documentación inicial de Git se encuentra en este [enlace](https://github.com/Nastard/ProyectoCC/tree/main/docs/documentacion_inicial.md).
