var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function() {
  console.log(this.value);
  if (this.value.length > 0) {
    pacientes.forEach(paciente => {
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i");
      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    });
  } else {
    pacientes.forEach(paciente => {
      paciente.classList.remove("invisivel");

    });
  }
});
