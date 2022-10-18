function Restaurante (){
	alert("Definitivamente el lugar es muy concurrido y varios clientes aseguran que la Sra. Totoro se a quedado en su retaurante todo el dia.");
}
function Vigia(){
	alert("Es evidente, esta camara de trancito detecto la muerte del oficinista, pero horas antes de que sucediera el incidente, antes de abrir el restaurante, se puede ver como sale del lugar el oficinista y segundos despues se ve que es perseguido por alguien.");
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