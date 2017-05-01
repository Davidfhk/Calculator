window.addEventListener('load',init,false)



var cifra = "";
var acumulado = 0;
var resultado = 0;
var suma = false;
var resta = false;
var multiplica = false;
var divide = false;

// función para el display empiece con un 0
function init (){
	document.getElementById('display').value = acumulado;
}

function number (num){
	document.getElementById('display').value = cifra = cifra + num;
}

function sumar (){
	if (resta == true) {
		cifraFunc();
		acumulado = acumulado - parseInt(cifra);
		resta = false;
	}else{
		if (multiplica == true) {
			if (cifra == "") {
				cifra = 1;
			}
			acumulado = acumulado * parseInt(cifra);
		}else if(divide == true){
			if (cifra == "") {
				cifra = 1;
			}
			acumulado = acumulado / parseInt(cifra);
		}else{
			cifraFunc();
			acumulado = acumulado + parseInt(cifra);
		}
		
	}
	
	cifra = "";
	document.getElementById('display').value = acumulado;
	suma = true;
	resta = false;
	multiplica = false;
	divide = false;
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
	if (multiplica == true) {
		if (cifra == "") {
			cifra = 1;
		}
		resultado = acumulado * parseInt(cifra);
		document.getElementById('display').value = resultado;
	}
	if (divide == true) {
		if (cifra == "") {
				cifra = 1;
		}
		resultado = acumulado / parseInt(cifra);
		document.getElementById('display').value = resultado;
	}
	acumulado = resultado;
	cifra = "";
	multiplica = false;
	suma = false;
	resta = false;
	divide = false;
}

function restar (){
	if (acumulado == 0 || suma == true){
		if (resta == true) {
			cifraFunc();
			acumulado = acumulado - parseInt(cifra);
		}else{
			cifraFunc();
			acumulado = acumulado + parseInt(cifra);
		}
		
	}else{
		if (multiplica == true) {
			if (cifra == "") {
				cifra = 1;
			}
			acumulado = acumulado * parseInt(cifra);
		}else if (divide == true){
			if (cifra == "") {
				cifra = 1;
			}
			acumulado = acumulado / parseInt(cifra);
		}else{
			cifraFunc();
			acumulado = acumulado - parseInt(cifra);
		}
		
	}
		cifra = "";
		document.getElementById('display').value = acumulado;
		resta = true;
		multiplica = false;
		suma = false;
}

function multiplicar (){ 
	if (acumulado == 0 || suma == true) {
		cifraFunc();
		acumulado = acumulado + parseInt(cifra);
	}else{
		if (resta == true) {
			cifraFunc();
			acumulado = acumulado - parseInt(cifra);
		}else if(divide == true){
			if (cifra == "") {
				cifra = 1;
			}
			acumulado = acumulado / parseInt(cifra);
		}else{
			if (cifra == "") {
				cifra = 1;
			}
			acumulado = acumulado * parseInt(cifra);
		}
		
	}
	cifra = "";
	document.getElementById('display').value = acumulado;
	multiplica = true;
	resta = false;
	suma = false;
	divide = false;
}

function dividir (){
	if (acumulado == 0 || suma == true) {
		cifraFunc();
		acumulado = acumulado + parseInt(cifra);
	}else{
		if (resta == true) {
			cifraFunc();
			acumulado = acumulado - parseInt(cifra);
		}else if(multiplica == true){
			if (cifra == "") {
				cifra = 1;
			}
			acumulado = acumulado * parseInt(cifra);
		}else{
			if (cifra == "") {
				cifra = 1;
			}
			acumulado = acumulado / parseInt(cifra);
		}
		
	}
	
	cifra = "";
	document.getElementById('display').value = acumulado;
	divide = true;
	resta = false;
	suma = false;
	multiplica = false;

}

function delet (){
	acumulado = 0;
	document.getElementById('display').value = acumulado;
	
}

/*Esta función esta para cuando no haya cifra, le asigno un 0,
 por ejemplo: 1+1+- (Esto solo lo usare para sumar y restar, ya que para 
 multiplicar y dividir necesito que sea un 1)*/

function cifraFunc () {
	if (cifra == "") {
		cifra = 0;
	}
}