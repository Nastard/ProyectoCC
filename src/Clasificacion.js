// Definición de la clase Clasificacion:
exports.Clasificacion = function (equipo, puntos, pj, pg, pe, pp, gf, gc) {
	this.equipo = equipo;
	this.puntos = puntos;
	this.pj = pj;
	this.pg = pg;
	this.pe = pe;
	this.pp = pp;
	this.gf = gf;
	this.gc = gc;
	
	this.modificar_clasificacion = modificar_clasificacion;
	this.ver_clasificacion = ver_clasificacion;
};

function modificar_clasificacion() {
	return true;
}

function ver_clasificacion() {
	return true;
}
