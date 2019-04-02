var total = 0;
var atual = 0;
var operador = '+';
var resultado = false;

function adicionar(valor){
	
	if(resultado == true && atual == 0){
		total = 0;
		atual = valor;
		document.getElementById("visor").value = atual;
		resultado = false;
	}else{
		atual = atual * 10;
		atual = atual + valor;
		document.getElementById("visor").value += valor;
	}
	
}

function somar(){
		switch(operador){
			case '+':
				total = total + atual;
				break;
			case '-':
				total = total - atual;
				break;
			case '*':
				total = total * atual;
				break;
			case '/':
				total = total / atual;
				break;
		}
		document.getElementById("visor").value = document.getElementById("visor").value + " + ";
		atual = 0;
		if(resultado == true && atual == 0){
			resultado = false;
		}
}

function subtrair(){
		switch(operador){
			case '+':
				total = total + atual;
				break;
			case '-':
				total = total - atual;
				break;
			case '*':
				total = total * atual;
				break;
			case '/':
				total = total / atual;
				break;
		}
		document.getElementById("visor").value = document.getElementById("visor").value + " - ";
		atual = 0;
		operador = '-';
	if(resultado == true && atual == 0){
			resultado = false;
		}
}

function multiplicar(){
		switch(operador){
			case '+':
				total = total + atual;
				break;
			case '-':
				total = total - atual;
				break;
			case '*':
				total = total * atual;
				break;
			case '/':
				total = total / atual;
				break;
		}
		document.getElementById("visor").value = document.getElementById("visor").value + " * ";
		atual = 0;
		operador = '*';
	if(resultado == true && atual == 0){
			resultado = false;
		}
}

function dividir(){
		switch(operador){
			case '+':
				total = total + atual;
				break;
			case '-':
				total = total - atual;
				break;
			case '*':
				total = total * atual;
				break;
			case '/':
				total = total / atual;
				break;
		}
		document.getElementById("visor").value = document.getElementById("visor").value + " / ";
		atual = 0;
		operador = '/';
	if(resultado == true && atual == 0){
			resultado = false;
		}
}

function igual(){
	if(resultado == false){
		switch(operador){
			case '+':
				total = total + atual;
				break;
			case '-':
				total = total - atual;
				break;
			case '*':
				total = total * atual;
				break;
			case '/':
				total = total / atual;
				break;
		}
		var x = document.getElementById("visor").value;
		x = x.replace(/\/=/g, '/');
		document.getElementById("visor").value = x + '\n =' + total;
		atual = 0;
		operador = '+';
		resultado = true;
	}
}

function limpar(){
	atual = 0;
	total = 0;
	operador = '+';
	document.getElementById("visor").value = '';
	resultado = false;
}