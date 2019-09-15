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

function operar(){
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
}

function somar(){
		operar();
		document.getElementById("visor").value = document.getElementById("visor").value + " + ";
		atual = 0;
		if(resultado == true && atual == 0){
			resultado = false;
		}
}

function subtrair(){
	operar();
	document.getElementById("visor").value = document.getElementById("visor").value + " - ";
	atual = 0;
	operador = '-';
	if(resultado == true && atual == 0){
		resultado = false;
	}
}

function multiplicar(){
	operar();
	document.getElementById("visor").value = document.getElementById("visor").value + " * ";
	atual = 0;
	operador = '*';
	if(resultado == true && atual == 0){
		resultado = false;
	}
}

function dividir(){
	operar();
	document.getElementById("visor").value = document.getElementById("visor").value + " / ";
	atual = 0;
	operador = '/';
	if(resultado == true && atual == 0){
		resultado = false;
	}
}

function igual(){
	if(resultado == false){
		operar();
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

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        if (cordova.platformId == 'android') {
            StatusBar.overlaysWebView(true);
            StatusBar.hide();
        }
    }
};