function Terraza (){
	alert("Ademas de la hermosa vista, este lugar se ver de dificil acceso, solo pocas personas pueder entrar aqui. Pero mire detective, que es esto!!!! No puede ser, esto es totalmente inaudito, esto es definitivamente el arma homicida, se nota que todavia tiene sandre de la victima, ademas con ser chiquito esto facilmente se podria confundir con un asuicidio");
}
function Escaleras(){
	alert("Se puede apreciar que este lugar no sea concurrido, con todo este polvo se puede apreciar las las huellas de todo zapato que cruza. Y claramente se ve que por lo menos 2 personas estuvieron aqui.");
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


