function Restaurante (){
	alert("Definitivamente el lugar no esta listo para abrir, ningun lugar de comida abre sin tener el alimento preparada.");
}
function Vigia(){
	alert("Es evidente, esta camara detecta de trancito detecto que la Sra.Totoro llego despues de la hora del asesinato, pero no a llegado con el arma al restaurante y tambien llego con ropa diferente.");
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