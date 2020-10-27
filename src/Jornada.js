// Definición de la clase Jornada:
exports.Jornada = function (numero_jornada, equipo_l, equipo_v, goles_l, goles_v, alineacion_l, alineacion_v) {
	this.numero_jornada = numero_jornada;
	this.equipo_l = equipo_l;
	this.equipo_v = equipo_v;
	this.goles_l = goles_l;
	this.goles_v = goles_v;
	this.alineacion_l = alineacion_l;
	this.alineacion_v = alineacion_v;

	this.nueva_jornada = nueva_jornada;
	this.modificar_jornada = modificar_jornada;
	this.ver_jornada = ver_jornada;
	this.ver_alineacion = ver_alineacion;
};

function nueva_jornada() {
	return true;
}

function modificar_jornada() {
	return true;
}

function ver_jornada() {
	return true;
}

function ver_alineacion() {
	return true;
}
