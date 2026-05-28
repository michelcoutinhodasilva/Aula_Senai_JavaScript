const botaoAdicionar = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");


botaoAdicionar.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {

  const campo = document.getElementById("campo-tarefa");
  const texto = campo.value.trim();
  
  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar!");
    return;
  }


  const item = document.createElement("li");
  item.textContent = texto;


  item.addEventListener("click", function () {
    item.remove();
  });

  lista.appendChild(item);


  campo.value = "";
}