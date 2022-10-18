function Random() {
	
	let x = Math.floor(Math.random() * 5) + 1; 
	//console.log(x);

	if (x == 1)
	{
		//alert("1" );
		document.location.replace ("Caso1/Principal.html");
	}
	if (x == 2)
	{
		//alert("2 " );
		document.location.replace ("Caso2/Principal.html");
	}
	if (x == 3)
	{
		//alert("3" );
		document.location.replace ("Caso3/Principal.html");
	}
	if (x == 4)
	{
		//alert("4" );
		document.location.replace ("Caso4/Principal.html");
	}
	if (x == 5)
	{
		//alert("5" );
		document.location.replace ("Caso5/Principal.html");
	}

}

let inicio = document.getElementById("inicio");
inicio.addEventListener("click",Random);