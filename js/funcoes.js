var titulo = document.querySelector(".titulo");
	titulo.textContent = "aparecida nutricionista"; 

var paciente = document.querySelector("#primeiro-paciente");

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdimc = paciente.querySelector(".info-imc");

var pesovalido = true;
var alturavalida = true; 


if(peso <= 0 || peso >= 1000){
    pesovalido = false;
    tdimc.textContent = "peso invalido"
}
if(altura <= 0 || altura >=  3.00){
    alturavalida = false;
    tdimc.textContent = "altura invalida"
}

if(alturavalida && pesovalido){
var imc = peso / (altura * altura);
tdimc.textContent = imc;
}