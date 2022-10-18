function Restaurante (){
	alert("Aqui hay un gran flujo de gente, seguramente la gente de aqui, pudo ver al oficinista pasar junto con la victima.");
}
function Vigia(){
	alert("Es evidente, esta camara de trancito detecto que el conserje Murakami paso por aqui, y unos sejundos despues, se puede apreciar a Gaston, asechando a Yurima.");
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