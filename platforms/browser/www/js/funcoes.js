var total = 0;
var atual = 0;
var operador = '+';

function adicionar(valor){
	atual = atual * 10;
	atual = atual + valor;
	document.getElementById("visor").value = atual;
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
	document.getElementById("visor").value = '';
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
	document.getElementById("visor").value = '';
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
	document.getElementById("visor").value = '';
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
	document.getElementById("visor").value = '';
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
	document.getElementById("visor").value = total;
	atual = 0;
	operador = '+';
}

function limpar(){
	atual = 0;
	total = 0;
	operador = '+';
	document.getElementById("visor").value = '';
}