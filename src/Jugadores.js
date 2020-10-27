// Definición de la clase Jugadores:
exports.Jugadores = function (nombre, equipo, puntos_fantasy) {
	this.nombre = nombre;
	this.equipo = equipo;
	this.puntos_fantasy = puntos_fantasy;

	this.modificar_equipo = modificar_equipo;
	this.nuevo_jugador = nuevo_jugador;
	this.modificar_jugador = modificar_jugador;
	this.ver_jugador = ver_jugador;
	this.ver_puntos_fantasy = ver_puntos_fantasy;
};

function nuevo_jugador() {
	return true;
}

function modificar_jugador() {
	return true;
}

function ver_jugador() {
	return true;
}

function ver_puntos_fantasy() {
	return true;
}
