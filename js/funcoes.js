var titulo = document.querySelector(".titulo");
	titulo.textContent = "aparecida nutricionista"; 

var paciente = document.querySelector("#primeiro-paciente");

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdimc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);

tdimc.textContent = imc;
