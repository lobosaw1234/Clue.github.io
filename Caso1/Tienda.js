
function Registradora (){
	alert("La registradora parece intacta, no se ve que esta alla sido robada");
}
function Anden(){
	alert("La comida esta totalmente tirada, parace que se llevaron parte de la mercancia");
}

function Camara(){
	alert("El video muestra a una persona que es caucasica promedio, de unos 1.60 m, se nota que tenia prisa en irse, despues de tremendo alboroto en la tienda, aunque tambien no se ve con que arma lo mato");
}
function Continuar(){
	var dialogo_tex = document.getElementById('dialogo');
	dialogo_tex.parentNode.removeChild(dialogo_tex);
	document.getElementById("Cambio_tex").innerHTML = ' ';

}



let btn = document.getElementById("btn");
btn.addEventListener("click",Registradora);

let ant = document.getElementById("ant");
ant.addEventListener("click",Anden);

let cama = document.getElementById("cama");
cama.addEventListener("click",Camara);

let conti = document.getElementById("conti");
conti.addEventListener("click",Continuar);


