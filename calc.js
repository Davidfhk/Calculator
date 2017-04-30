var cifra = "";
var acumulado = 0;
var resultado = 0;
var suma = false;
var resta = false;

function number (num){
	document.getElementById('display').value = cifra = cifra + num;
}
function sumar (){
	if (resta == true) {
		cifraFunc();
		acumulado = acumulado - parseInt(cifra);
		resta = false;
	}else{
		cifraFunc();
		acumulado = acumulado + parseInt(cifra);
	}
	
	cifra = "";
	document.getElementById('display').value = acumulado;
	suma = true
}
function igual (){
	if(suma == true){
		cifraFunc();
		resultado = acumulado + parseInt(cifra);
		document.getElementById('display').value = resultado;
	}
	if(resta == true){
		cifraFunc();
		resultado = acumulado - parseInt(cifra);
		document.getElementById('display').value = resultado;
	}
	acumulado = resultado;
	cifra = "";
	suma = false;
	resta = false;
}
function restar (){
	if (acumulado == 0 || suma == true){
		cifraFunc();
		acumulado = acumulado + parseInt(cifra);
		suma = false;
	}else{
		cifraFunc();
		acumulado = acumulado - parseInt(cifra);
	}
		cifra = "";
		document.getElementById('display').value = acumulado;
		resta = true;
}

function cifraFunc () {
	if (cifra == "") {
		cifra = 0;
	}
}