var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault(); //muda o comportamento padrao do botao 
   
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // criando os td
    var pacientetr = document.createElement("tr"); 
    var nometd = document.createElement("td");
    var pesotd = document.createElement("td");
    var alturatd = document.createElement("td");
    var gorduratd = document.createElement("td");
    var imctd = document.createElement("td");
     
    //pegando as informações de td
    nometd.textContent = nome;
    pesotd.textContent = peso;
    alturatd.textContent = altura;
    gorduratd.textContent = gordura;
    imctd.textContent = calculaimc(peso,altura);

    //inserer os td como filhos do tr
    pacientetr.appendChild(nometd);  
    pacientetr.appendChild(pesotd);
    pacientetr.appendChild(alturatd);
    pacientetr.appendChild(gorduratd);
    pacientetr.appendChild(imctd);  

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacientetr) //a tabela insere o tr como filho 

});