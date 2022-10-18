

function Anden(){
	alert("Definitivamente esta la mercancia, no se ve que haya sido robada.");
}

function Camara(){
	alert("Definitivamente es el, Changolion. Solo vino a dar lastima, ademas el Sr. Yurima no salio de la tienda para nada");
}
function Continuar(){
	var dialogo_tex = document.getElementById('dialogo');
	dialogo_tex.parentNode.removeChild(dialogo_tex);
	document.getElementById("Cambio_tex").innerHTML = ' ';

}





let ant = document.getElementById("ant");
ant.addEventListener("click",Anden);

let cama = document.getElementById("cama");
cama.addEventListener("click",Camara);

let conti = document.getElementById("conti");
conti.addEventListener("click",Continuar);


