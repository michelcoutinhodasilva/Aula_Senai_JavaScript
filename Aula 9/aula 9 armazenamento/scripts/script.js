const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// criando uma lista vazia
let tarefas = [];

// função para salvar tarefas no local storage
function salvarTarefas() {
  // localStorage -> armazenamento local do navegador
  // setItem -> salva no armazenamento o conteúdo recebido
  // JSON.stringify(tarefas) -> pega a lista de tarefas, converte para texto (string) e armazena esse texto
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// função para mostrar tarefas na tela
function mostrarTarefas() {
  listaTarefas.innerHTML = ""; // limpa a lista de tarefas na tela

  for (let i = 0; i < tarefas.length; i++) {
    const li = document.createElement("li"); // para cada elemento, cria um li
    li.innerText = tarefas[i]; // cada vez que criar o li, passa o valor que está na lista de tarefas na posição i
    const botaoRemover = document.createElement("button"); // cria um botão para remover a tarefa
    botaoRemover.innerText = "🗑️";
    //criar a classe para usar para estilização do css
    botaoRemover.className = "botao-remover";

    botaoRemover.addEventListener("click", () => {
      //CHAMAR A FUNÇÃO PARA REMOVER A TAREFA
      removerTarefas(i);
    });

    li.appendChild(botaoRemover);
    listaTarefas.appendChild(li);
  }
}

function removerTarefas(posicaoTarefa) {
  //splice ->  (posição inicial, qtde_items)
  tarefas.slice(posicaoTarefa, 1);

  //depois de remover, chamo a função para salvar no localStorege
  //atualiza o localstorage com array de tarefas atualizada
  salvarTarefas();

  //mostra as tarefas atualizada sem as tarefas que foram removidas
  mostrarTarefas();
}

function adicionarTarefas() {
  const valorTarefa = inputTarefa.value;
  if (valorTarefa.trim() === "") {
    alert("Digite uma tarefa");
    return; // não deixa a tarefa vazia
  }
  //adiciona tarefas dentro do array
  tarefas.push(valorTarefa);
  inputTarefa.value = "";

  salvarTarefas();
  mostrarTarefas();
}
//função para carregar as tarefas salvas no localStorage
function carregarTarefas() {
  //pega as tarefas e armazena na variavel "tarefasSalvas"
  const tarefasSalvas = localStorage.getItem("tarefas");

  //se existir alguma coisa  dentro de tarefasSalvas
  //então converte a tarefa e a mostra na tela
  if (tarefasSalvas) {
    //transforma o texto que esta no localstorage  em array novamente
    tarefas = JSON.parse(tarefasSalvas);
    mostrarTarefas();
  }
}

botaoAdicionar.addEventListener("click", adicionarTarefas);
carregarTarefas();
