
/*sfunction ChangeTex() {
	document.getElementById("Cambio").innerHTML = '<div>Se logro cambiar el texto perros DDDDDDDD/nDDDDDDDDDDDDDDDDDDDD</div><div>2222222222222222222222</div>';
}

let btn = document.getElementById("btn");
btn.addEventListener("click",ChangeTex);
*/
function Continuar(){
	var dialogo_tex = document.getElementById('dialogo');
	dialogo_tex.parentNode.removeChild(dialogo_tex);
	document.getElementById("Cambio").innerHTML = ' ';

}

let btn = document.getElementById("btn");
btn.addEventListener("click",Continuar);
/*
var mybtn = document.getElementById("btn");  
mybtn.addEventListener("click", ChangeTex);  
mybtn.addEventListener("click", B);  
mybtn.addEventListener("click", C);  
*/
//document.getElementById("btn").addEventListener("click", ChangeTex); 

/*function ChangeTex() {
	document.getElementById("Cambio").innerHTML = '<div>Se logro cambiar el texto perros DDDDDDDD/nDDDDDDDDDDDDDDDDDDDD</div><div>2222222222222222222222</div>';
}
function B() {
	document.getElementById("cam").innerHTML = '<div>Andres</div><div>Eres la verga</div>';
}*/






/*var button = document.getElementById("Btn");

button.onclick = function(){
	document.getElementById("Cambio").innerHTML = '<div>Se logro cambiar el texto perros DDDDDDDD/nDDDDDDDDDDDDDDDDDDDD</div><div>2222222222222222222222</div>';
	document.getElementById("Cambio").innerHTML = '<div>Andres</div><div>Eres la verga</div>';
}*/



