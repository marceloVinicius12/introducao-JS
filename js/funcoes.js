var titulo = document.querySelector(".titulo");
	titulo.textContent = "aparecida nutricionista"; 

var pacientes = document.querySelectorAll(".paciente");
//loop que busca a informações de todos pacientes
for(var i = 0; i < pacientes.length;  i ++){
    var paciente = pacientes[i];


    //busca a classe e o conteudo que esta no html 
var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdimc = paciente.querySelector(".info-imc");

var pesovalido = true;
var alturavalida = true; 

//validações 
if(peso <= 0 || peso >= 1000){
    pesovalido = false;
    tdimc.textContent = "peso invalido"
    paciente.classList.add("paciente-invalido")
}
if(altura <= 0 || altura >=  3.00){
    alturavalida = false;
    tdimc.textContent = "altura invalida"
    paciente.classList.add("paciente-invalido") //adicionanod uma nova classe de css
}

//calculo
if(alturavalida && pesovalido){
var imc = peso / (altura * altura);
tdimc.textContent = imc.toFixed(2);
}
}

