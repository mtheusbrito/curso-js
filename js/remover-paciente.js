var pacientes = document.querySelectorAll(".paciente");
tabela.addEventListener("dblclick", function(e) {
  Swal.fire({
    title: "Voce tem certeza?",
    text: "Você não poderá reverter isso!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim!"
  }).then(result => {
    if (result.value) {
      if (removerPaciente(e)) {
        Swal.fire("Excluído!", "Seu arquivo foi excluído.", "success");
      }
    }
  });
});

function removerPaciente(e) {
  try {
    e.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
      e.target.parentNode.remove();
    }, 500);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
