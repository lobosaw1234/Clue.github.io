
function Datos() {
	
	var asesino = document.getElementById("Asesino").value
	var arma = document.getElementById("Arma").value
	
	const real = "Murakami el conserje";
	const arm = "Machete";

	var contador = 0;

	if (asesino == real && arma == arm)
	{
		alert("Es correcto!!!! el asesino es: " + asesino + " con el arma " + arma);
	}
	if(asesino == real && arma != arm){
		alert("Es el asesino, pero no el arma");
		
	}
	if(asesino != real && arma == arm){
		alert("No es el asesino, pero es el arma");
	
	}
	if(asesino != real && arma != arm){
		alert("No es el asesino ni tampoco el arma");
	}

}

function Despedida() {
	alert("Muchas gracias por jugar!!!");
}
let adios = document.getElementById("adios");
adios.addEventListener("click",Despedida);






