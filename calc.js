window.addEventListener('load',init,false)



var cifra = "";
var acumulado = 0;
var resultado = 0;
var suma = false;
var resta = false;
var multiplica = false;
var divide = false;

// función para que el display empiece con un 0
function init (){
	document.getElementById('display').value = acumulado;
}

function number (num){
	document.getElementById('display').value = cifra = cifra + num;
}

function sumar (){
	if (resta == true) {
		cifraFuncA();
		acumulado = acumulado - parseFloat(cifra);
		resta = false;
	}else{
		if (multiplica == true) {
			cifraFuncB();
			acumulado = acumulado * parseFloat(cifra);
		}else if(divide == true){
			cifraFuncB();
			acumulado = acumulado / parseFloat(cifra);
		}else{
			cifraFuncA();
			acumulado = acumulado + parseFloat(cifra);
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
	if(acumulado == 0 || suma == true){
		cifraFuncA();
		resultado = acumulado + parseFloat(cifra);
		document.getElementById('display').value = resultado;
	}
	if(resta == true){
		cifraFuncA();
		resultado = acumulado - parseFloat(cifra);
		document.getElementById('display').value = resultado;
	}
	if (multiplica == true) {
		cifraFuncB();
		resultado = acumulado * parseFloat(cifra);
		document.getElementById('display').value = resultado;
	}
	if (divide == true) {
		cifraFuncB();
		resultado = acumulado / parseFloat(cifra);
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
			cifraFuncA();
			acumulado = acumulado - parseFloat(cifra);
		}else{
			cifraFuncA();
			acumulado = acumulado + parseFloat(cifra);
		}
		
	}else{
		if (multiplica == true) {
			cifraFuncB();
			acumulado = acumulado * parseFloat(cifra);
		}else if (divide == true){
			cifraFuncB();
			acumulado = acumulado / parseFloat(cifra);
		}else{
			cifraFuncA();
			acumulado = acumulado - parseFloat(cifra);
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
		cifraFuncA();
		acumulado = acumulado + parseFloat(cifra);
	}else{
		if (resta == true) {
			cifraFuncA();
			acumulado = acumulado - parseFloat(cifra);
		}else if(divide == true){
			cifraFuncB();
			acumulado = acumulado / parseFloat(cifra);
		}else{
			cifraFuncB();
			acumulado = acumulado * parseFloat(cifra);
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
		cifraFuncA();
		acumulado = acumulado + parseFloat(cifra);
	}else{
		if (resta == true) {
			cifraFuncA();
			acumulado = acumulado - parseFloat(cifra);
		}else if(multiplica == true){
			cifraFuncB();
			acumulado = acumulado * parseFloat(cifra);
		}else{
			cifraFuncB();
			acumulado = acumulado / parseFloat(cifra);
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
	cifra = "";
	acumulado = 0;
	document.getElementById('display').value = acumulado;
	
}

function point (){
	cifra = cifra + ".";
}

/*Esta función esta para cuando no haya cifra, le asigno un 0,
 por ejemplo: 1+1+- (Esto solo lo usare para sumar y restar, ya que para 
 multiplicar y dividir necesito que sea un 1)*/

function cifraFuncA () {
	if (cifra == "") {
		cifra = 0;
	}
}


/*Esta es la que usare para multiplicar y dividir */

function cifraFuncB () {
	if (cifra == "") {
		cifra = 1;
	}
}