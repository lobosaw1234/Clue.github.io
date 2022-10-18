function Restaurante (){
	alert("Aqui hay un gran flujo de gente, seguramente la gente de aqui, pudo ver al vago pasar.");
}
function Vigia(){
	alert("Es evidente, esta camara de trancito detecto al vago, zicsagueando por la calle, y unos segundos despues, se puede apreciar a alquien siguiendolo con algo bastante largo, se ve que trata de esconderlo.");
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