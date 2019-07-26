var pacientes = document.querySelectorAll(".paciente");
var mensagem = "";
function percorrerElementos() {
  pacientes.forEach(paciente => {
    validarDados(paciente);
  });
}

function setaClassePacienteInvalido(paciente) {
  paciente.classList.add("paciente-invalido");
}
function validarDados(paciente) {
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  if (validaPeso(peso) && validaAltura(altura)) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    setaClassePacienteInvalido(paciente);
    tdImc.textContent = "Peso ou altura invalidos!";
  }
}

function validaPaciente(paciente) {
  var erros = [];
  if (!validaNome(paciente.nome)) erros.push("Nome invalido!");
  if (!validaAltura(paciente.altura)) erros.push("Altura invalida!");
  if (!validaPeso(paciente.peso)) erros.push("Peso invalido!");
  if (!validaGordura(paciente.gordura)) erros.push("Gordura invalida!");


 inputError("peso", validaPeso(paciente.peso));
 inputError("altura", validaAltura(paciente.altura));
 inputError("nome", validaNome(paciente.nome));
 inputError("gordura", validaGordura(paciente.gordura));
  return erros;
}
function validaNome(nome) {
  if (nome.length == 0) {
    return false;
  } else {
    return true;
  }
}
function validaAltura(altura) {
  if (altura <= 0 || altura >= 3.0) {
    return false;
  } else {
    return true;
  }
}
function validaPeso(peso) {
  if (peso <= 0 || peso >= 1000) {
    return false;
  } else {
    return true;
  }
}
function validaGordura(gordura) {
  if (gordura.length == 0) {
    return false;
  } else {
    return true;
  }
}
function calculaImc(peso, altura) {
  var imc = 0;
  imc = (peso / (altura * altura)).toFixed(2);
  return imc;
}
function inputError(id, error) {
  var input = document.querySelector("#" + id);

  if (!error) {
    input.classList.add("input-error");
  } else {
    input.classList.remove("input-error");
  }
  console.log(error);
}
percorrerElementos();
