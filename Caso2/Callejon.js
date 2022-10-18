function Maquina (){
	alert("Definitivamente es la ropa del labron, hasta todavia la sangre esta fresca de esta sudadera.");
}

function Rincon(){
	alert("Detective, mire aqui!!! Esto definitivamente es el arma homicida. Esto si puede hacer ese corte limpio, esto no cualquira lo consigue");
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