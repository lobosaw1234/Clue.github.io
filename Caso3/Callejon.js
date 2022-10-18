function Maquina (){
	alert("Detras de las maquinas solo se pueden observar ropa y botellas basias de Tonayan, parecen ser del Changolion. Definitivamente este lugar era utilizado por el, quiza lo hayan visto en la tienda por esos Tonayan");
}

function Rincon(){
	alert("Detective, mire aqui!!! Esto definitivamente es el arma homicida. Esto si puede hacer ese corte grotesco y no tan limpio, dejar el arma homisida aqui, no ha sido buena idea.");
}

function Pasillo(){
	alert("Desde aqui se pueden ver varios puntos importantes, el balcon de ese edificio y la calle con ese restaurante callejero, quiza hallan visto algo");
}

function Continuar(){
	var dialogo_tex = document.getElementById('dialogo');
	dialogo_tex.parentNode.removeChild(dialogo_tex);
	document.getElementById("Cambio_tex").innerHTML = ' ';

}


let maqui = document.getElementById("maqui");
maqui.addEventListener("click",Maquina);

let rincon = document.getElementById("rincon");
rincon.addEventListener("click",Rincon);

let pasillo = document.getElementById("pasillo");
pasillo.addEventListener("click", Pasillo);

let conti = document.getElementById("conti");
conti.addEventListener("click",Continuar);