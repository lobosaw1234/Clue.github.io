function Terraza (){
	alert("Ademas de la hermosa vista, no se ve nada sospechoso, se ve que nadie a subido aqui en dias, el intendente ha dicho la verdad y no ha visto nada peculiar");
}
function Escaleras(){
	alert("Las escaleras se ven limpias, parece que ni a pasado ni un alma. Definitivamente este lugar es de dificil acceso.");
}

function Continuar(){
	var dialogo_tex = document.getElementById('dialogo');
	dialogo_tex.parentNode.removeChild(dialogo_tex);
	document.getElementById("Cambio_tex").innerHTML = ' ';

}



let terra = document.getElementById("terra");
terra.addEventListener("click",Terraza);

let esca = document.getElementById("esca");
esca.addEventListener("click",Escaleras);

let conti = document.getElementById("conti");
conti.addEventListener("click",Continuar);


