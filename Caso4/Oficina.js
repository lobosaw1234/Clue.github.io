function Balcon (){
	alert("Hay una buena vista hacia la calle y tambien al callejon, quiza encontraremos mas en el callejon.");
}
function Mesa(){
	alert("Vaya!!! pero mire esto detective, esto definitivamente esto es es el arma homicida, con razon se estucho un estruendo al accionar esto. Ademas, aqui estan las cosas de la tienda.");
}
function Compu(){
	alert("Ademas del trabajo, esta computadora estan conectadas con las camaras de la entrada de la oficina, aun asi, no captaron algo inusual hasta nuestra llegada. Solo se puede ver que el llega a la oficina con cosas que compro en la tienda");
}

function Continuar(){
	var dialogo_tex = document.getElementById('dialogo');
	dialogo_tex.parentNode.removeChild(dialogo_tex);
	document.getElementById("Cambio_tex").innerHTML = ' ';

}



let bal = document.getElementById("bal");
bal.addEventListener("click",Balcon);

let mesa = document.getElementById("mesa");
mesa.addEventListener("click",Mesa);

let compu = document.getElementById("compu");
compu.addEventListener("click",Compu);

let conti = document.getElementById("conti");
conti.addEventListener("click",Continuar);