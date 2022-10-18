function Balcon (){
	alert("Hay una buena vista hacia la calle y tambien al callejon, pero sin duda desde aqui, se puede escuchar todo lo que pasa en la terraza");
}
function Mesa(){
	alert("No se ve mas que trabajo y cigarrillos de Gaston.");
}
function Compu(){
	alert("Este ordenador tiene conexion directa con las camaras de afuera de la oficina... Vaya, pero que curiosos!!! Se ve claramente que alguien va a toda prisa a la parte de arriba del edificio y coincide con los que nos dijo Gaston.");
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