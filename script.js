/* 
	SLIDE 6 
*/
/* EXE1 */
/* Converter os graus de Celsius para Fahrenheit */
converterFahrenheit = function(){
	var celsius = document.getElementById("celsius").value,
		fahr = celsius * 1.8 + 32,
		resultado = document.getElementById("resultado");
	if (celsius == null) {
		alert("Preencha o campo com o valor em Celsius");
	} else {
		resultado.innerHTML = "Graus em Fahrenheit: " + fahr+"°";
	}
}
/* EXE2 */
/* Calcular o valor do IMC de uma pessoa */
calculoIMC = function(){
	var peso = parseFloat(document.getElementById("peso").value),
		altura = parseFloat(document.getElementById("altura").value),
		resultadoIMC = document.getElementById("resultadoIMC"),
		image = document.getElementById("image"),

		calculo = peso / (altura * altura);

		if(calculo <= 18.5){
			resultadoIMC.innerHTML = "Você está magro com este indice!";
			image.src = "images/magreza.jpg";
			image.style.display = "block";
			console.log("1");
		} else if(calculo > 18.5 && calculo <= 24.9){
			resultadoIMC.innerHTML = "Você está magro com este indice!";
			image.src = "images/magro.jpg";
			image.style.display = "block";
			console.log("2");
		} else if(calculo > 25 && calculo <= 29.9){
			resultadoIMC.innerHTML = "Você está com sobre peso com este indice!";
			image.src = "images/acima-peso.jpg";
			image.style.display = "block";
			console.log("3");
		} else if(calculo > 29 && calculo <= 39.9){
			resultadoIMC.innerHTML = "Você está obeso com este indice!";
			image.src = "images/obeso.jpg";
			image.style.display = "block";
			console.log("4");
		} else if(calculo > 40){
			resultadoIMC.innerHTML = "Tu vai morrer com este indice!";
			image.src = "images/morte.jpg";
			image.style.display = "block";
			console.log("5");
		}
}
/* EXE3 */
/* Converter CM em Polegadas */
conversorCmPolegadas = function(valNum){
	var resultadoCMT = parseInt(document.getElementById("resultadoCMT").value);
	var cmt = parseInt(document.getElementById("cmt").value);
	valNum = cmt;
	document.getElementById("resultadoCMT").innerHTML = 'Valor em Polegadas: ' +  valNum/2.54;
}
/* EXE4 */
/* Converter Litros em Galões */
conversorLitrosGaloes = function(valNum){
	var resultadoCMT = parseInt(document.getElementById("resultadoLitros").value);
	var litros = parseInt(document.getElementById("litros").value);
	valNum = litros;
	document.getElementById("resultadoLitros").innerHTML = 'Valor em Galões: ' +  valNum*2.11;
}
/* EXE5 */
/* Converter CM² em Hectares */
conversorM2Hectares = function(valNum){
	var resultadoMedidas = parseInt(document.getElementById("resultadoMedidas").value);
	var m2 = parseFloat(document.getElementById("m2").value);
	valNum = m2;
	document.getElementById("resultadoMedidas").innerHTML = 'Valor em Hectares: ' +  valNum/027,4;
}

/* BÔNUS - Utilizando conversão de Graus utlizando KeyUP() ou onChange() */
convert = function(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}

/* 
	SLIDE 7 
*/
/* EXE1 */
submeterForm =  function(){
	var nome = document.getElementById("nome").value,
		resultadoInputForm = document.getElementById("resultadoInputForm");
		resultadoInputForm.style.color = "black";
	if(nome == ""){
		// alert("Preencha o campo com o seu nome: ");
		resultadoInputForm.innerHTML = "Por favor, preencha o campo com seu nome!"
		resultadoInputForm.style.color = "red";
		document.getElementById("nome").focus();
		return false;
	} else{
		resultadoInputForm.innerHTML = "Preencheu corretamente."
	}
}

/* EXE2 */
infoNavegador = function(){
	var info = "<strong>CodeName Navegador:</strong> " + navigator.appCodeName;
		info += "<br/><strong>Nome do Navegador:</strong> " + navigator.appName;
		info += "<br/><strong>Versão do Navegador:</strong> " + navigator.appVersion;
		info += "<br/><strong>Cookies habilitados?</strong> " + navigator.cookieEnable;
		info += "<br/><strong>Plataformas:</strong>  " + navigator.plataform;
		info += "<br/><strong>User-agent header:</strong> " + navigator.userAgent;
		document.getElementById("resultadoInfoNavegador").innerHTML = info; 
}
resetInfoNavegador = function(){
	var info = document.getElementById("resultadoInfoNavegador").innerHTML = ""; 
}

