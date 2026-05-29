const inputPedidos = document.getElementById("inputPedido");
const botaoAdicionar = document.getElementById("btnAdicionar");
const listaPedidos = document.getElementById("listaPedidos");
const botaoAtender = document.getElementById("btnAtender");

const pedidoAtual = document.getElementById("pedidoAtual");
let pedidos = [];

function salvaPedidos() {
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function mostrarPedidos() {
  listaPedidos.innerHTML = "";

  for (let i = 0; i < pedidos.length; i++) {
    const li = document.createElement("li");
    li.innerText = pedidos[i];
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "🗑️";

    botaoRemover.className = "botao-remover";
    botaoRemover.addEventListener("click", () => {
      removerPedidos(i);
    });
    li.appendChild(botaoRemover);
    listaPedidos.appendChild(li);
  }
}
function removerPedidos(posicaoPedido) {
  pedidos.splice(posicaoPedido, 1);
  salvaPedidos();
  mostrarPedidos();
}

function adicionarPedidos() {
  const valorPedido = inputPedidos.value;

  if (valorPedido.trim() === "") {
    alert("digite um pedido");
    return;
  }
  pedidos.push(valorPedido);
  inputPedidos.value = "";

  salvaPedidos();

  mostrarPedidos();
}
function carregarPedidos() {
  const pedidosSalvos = localStorage.getItem("pedidos");
  if (pedidosSalvos) {
    pedidos = JSON.parse(pedidosSalvos);
    mostrarPedidos();
  }
}
botaoAdicionar.addEventListener("click", adicionarPedidos);
carregarPedidos();

botaoAtender.addEventListener("click", atenderPedido);
function atenderPedido() {
  const primeiro = pedidos[0];
  pedidoAtual.innerText = "Atendendo " + primeiro;
  pedidos.splice(0, 1);
  salvaPedidos();
  mostrarPedidos();
}
