function Balcon (){
	alert("Hay una buena vista hacia la tienda y tambien al callejon, quiza encontraremos mas en el callejon.");
}
function Mesa(){
	alert("Mire detective, parace que el oficinista tenia algo mas con la Sra. Totoro, este dige en la mesa hace que esto sea real.");
}
function Compu(){
	alert("Ademas del trabajo, esta computadora estan conectadas con las camaras de la entrada de la oficina, y se puede ver como alguien sube con Gaston a la fuerza a la azotea a toda priza.");
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