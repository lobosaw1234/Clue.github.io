

function Anden(){
	alert("La comida esta aqui, no falta nada.");
}

function Camara(){
	alert("El video de la camara no se puede mostrar, el sistema de seguridad de aqui esta dañado, con razon nos permitio inspeccionar el lugar sin problemas. Parece ser que no nos dice nada de verdad el Sr. Yurima.");
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


