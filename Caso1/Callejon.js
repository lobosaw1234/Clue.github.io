function Maquina (){
	alert("Definitivamente es la ropa del ladron, hasta todavia la sangre esta fresca de esta sudadera.");
}

function Rincon(){
	alert("Detective, mire aqui!!! Esto definitivamente es el arma homicida. Esto si puede hacer ese corte no tan limpio ademas esta partido en punta, seguro lo tomo de aqui mismo, del callejon.");
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