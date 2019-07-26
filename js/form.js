var botaoAdicionar = document.querySelector("#adicionar-paciente");
var tabela = document.querySelector("#tabela-pacientes");
botaoAdicionar.addEventListener("click", function(e) {
  e.preventDefault();
  adicionaPaciente();
});

function obtemPacienteFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };

  return paciente;
}
function montaTd(atributo, classe) {
  var td = document.createElement("td");
  td.textContent = atributo;
  td.classList.add(classe);
  return td;
}
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
  return pacienteTr;
}
function adicionaPaciente() {
  var form = document.querySelector("#form-paciente");
  var paciente = obtemPacienteFormulario(form);

  if (!verificaErros(paciente)) {
    console.log("Paciente invalido");
    return;
  }

  adicionaPacienteNaTabela(paciente);
  form.reset();
  document.querySelector("#mensagens-erro").innerHTML = "";
}

function adicionaPacienteNaTabela(paciente) {
  tabela.appendChild(montaTr(paciente));
}
function verificaErros(paciente) {
  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros, paciente);

    return;
  }

  if (validaPeso(paciente.peso) && validaAltura(paciente.altura)) {
    return true;
  }
  return false;
}
function exibeMensagensDeErro(erros, paciente) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(erro => {
    var li = document.createElement("li");
    li.classList.add("erros");
    li.textContent = erro;
    ul.appendChild(li);
  });
  console.log(paciente.nome);
}

function monstrarMensagem() {
  console.log("Ola mundo");
}
