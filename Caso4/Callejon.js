function Maquina (){
	alert("Definitivamente esto es ropa, parece que le dejaron para que se abrigara. ");
}

function Rincon(){
	alert("No hay nada mas que basura marina aqui, no hay nada.");
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