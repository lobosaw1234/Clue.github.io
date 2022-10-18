function Terraza (){
	alert("Ademas de la hermosa vista, este lugar se ver de dificil acceso, solo pocas personas pueder entrar aqui. Pero mire detective, que es esto!!!! No puede ser, esto es totalmente inaudito, es la vestimenta del sujeto captado de la camara de la oficina, se puede notar la sangre fresca en toda la sudadera. ");
}
function Escaleras(){
	alert("Se puede apreciar que este lugar no sea concurrido, con todo este polvo se puede apreciar las las huellas de todo zapata que cruza. Y claramente se ve que alguien estuvo aqui. ");
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


