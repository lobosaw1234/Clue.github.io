

function Anden(){
	alert("Definitivamente no esta la mercancia que se robo, nadie se esperaria esto!");
}

function Camara(){
	alert("Definitivamente es el, Gaston. Pero que pasada, ademas de los cigarrillos, creo que se robo unos panes. Se le nota nervioso, y para acabarla nos a mentido sobre la hora, estuvo aqui despues de la hora del asesinato");
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


