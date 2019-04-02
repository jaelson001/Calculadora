var total = 0;
var atual = 0;
var operador = '+';
var resultado = false;

function adicionar(valor){
	atual = atual * 10;
	atual = atual + valor;
	if(resultado == true){
		document.getElementById("visor").value = atual;
		resultado = false;
	}else{
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
}

function igual(){
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
	document.getElementById("visor").value = document.getElementById("visor").value + '\n' + total;
	atual = 0;
	total = 0;
	operador = '+';
	resultado = true;
}

function limpar(){
	atual = 0;
	total = 0;
	operador = '+';
	document.getElementById("visor").value = '';
	resultado = false;
}