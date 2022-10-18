function Restaurante (){
	alert("Definitivamente el lugar es muy concurrido y es probable que hayan visto a Gaston por ultima vez por aqui.");
}
function Vigia(){
	alert("Es evidente, esta camara detecta de trancito detecto a Gaston pasar por aqui, pero parece que solo era de paso, que salio a caminar antes del incidente. No se le ve a nadie persiguiendolo.");
}


function Continuar(){
	var dialogo_tex = document.getElementById('dialogo');
	dialogo_tex.parentNode.removeChild(dialogo_tex);
	document.getElementById("Cambio_tex").innerHTML = ' ';

}



let res = document.getElementById("res");
res.addEventListener("click",Restaurante);

let vigi = document.getElementById("vigi");
vigi.addEventListener("click",Vigia);


let conti = document.getElementById("conti");
conti.addEventListener("click",Continuar);