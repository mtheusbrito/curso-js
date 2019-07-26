var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");
botaoBuscarPacientes.addEventListener("click", function() {
  console.log("Buscar pacientes");

  var xhr = new XMLHttpRequest();
  var erroAjax = document.querySelector("#erro-ajax");
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function() {
    if (xhr.status == 200) {
      erroAjax.classList.add("inivisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      console.log(pacientes);
      pacientes.forEach(paciente => {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
     
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
