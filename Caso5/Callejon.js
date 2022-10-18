function Maquina (){
	alert("Detras de todas estas maquinas, no hay nada mas que basura de botellas de Tonayan vacias.");
}

function Rincon(){
	alert("Era de saberse, este lugar esta lleno de drogas");
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


let conti = document.getElementById("conti");
conti.addEventListener("click",Continuar);