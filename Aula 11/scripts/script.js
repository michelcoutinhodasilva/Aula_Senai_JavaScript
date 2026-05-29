const produtos = [
  { id: 1, nome: "Teclado Gamer", categoria: "Perifericos", preco: 120.9 },
  { id: 2, nome: "Mouse Sem Fio", categoria: "Periféricos", preco: 89.9 },
  { id: 3, nome: "Monitor 24 Polegadas", categoria: "Monitores", preco: 799.9 },
  { id: 4, nome: "Headset USB", categoria: "Áudio", preco: 149.9 },
  { id: 5, nome: "Notebook", categoria: "Computadores", preco: 3299.9 },
  { id: 6, nome: "Webcam HD", categoria: "Acessórios", preco: 199.9 },
];

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos() {
  // FILTRO DE BUSCA

  // pega o valor digitado na busca e converte para minuscula
  let textoBusca = campoBusca.value.toLowerCase();

  //percorre a lista de produtos e valida se existe o nome buscado no filtro(input) dentro da lista de produtos
  //includes -> valida se existe o texto buscado dentro da lista de produtos
  let produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(textoBusca),
  );
  //FILTRO DE ORDENAÇÃO(SELECT)
  //verifica se a opção selecionada é  "nome a-z"
  if (ordenacao.value === "nome-az") {
    //ordena o array de produtos
    produtosFiltrados.sort((a, b) => {
      // localeCompare -> faz uma comparação linguistica mais correta
      // negativo -> o A vem antes
      //positivo -> o B vem antes
      // 0 -> são iguais
      return a.nome.localeCompare(b.nome);
    });
  }

  //verifica se a opçao e "nome z-a"
  if (ordenacao.value === "nome-za") {
    //ordena o array de produtos
    produtosFiltrados.sort((a, b) => {
      // localeCompare -> faz uma comparação linguistica mais correta
      // negativo -> o A vem antes
      //positivo -> o B vem antes
      // 0 -> são iguais
      return b.nome.localeCompare(a.nome);
    });
  }

  // ordenar por menor preço
  if (ordenacao.value === "preco-menor") {
    //ordena pelos preços

    //subtrai os valores
    //se der negativo -> o a vem antes do b(menor preço)
    // se der positivo -> b vem antes
    produtosFiltrados.sort((a, b) => {
      return a.preco - b.preco;
    });
  }

  // verificar se é o maior preco
  if (ordenacao.value === "preco-maior") {
    //ordena pelos preços

    //subtrai os valores
    //se der negativo -> o B vem antes do b(maior preço)
    // se der positivo -> A vem antes
    produtosFiltrados.sort((a, b) => {
      return b.preco - a.preco;
    });
  }
  //limpa a tela para mostrar os produtos filtrados
  listaProdutos.innerHTML = "";

  if (produtosFiltrados.length === 0) {
    listaProdutos.innerHTML =
      "<p class= 'mensagem'> Nenhum produto encontrado.</p>";
    //return serve para quebrar o sistema aqui
    // não executa mais nada para baixo da função
    return;
  }
  // criar card de produtos para cada produto
  for (let i = 0; i < produtosFiltrados.length; i++) {
    let produto = produtosFiltrados[i];

    listaProdutos.innerHTML += `
    <div class='card'>
        <h2>${produto.nome}</h2>
        <p>Categoria: ${produto.categoria}</p>
        <p class ='preco'>R$ ${produto.preco.toFixed(2).replace(".", ".", ".")}</p>
    </div>
    `;
  }
}

//eventos
//evento que dispara o input quando digitamos
campoBusca.addEventListener("input", () => {
  mostrarProdutos();
});

//evento que dispara o select quando trocamos as options
ordenacao.addEventListener("change", () => {
  mostrarProdutos();
});
// iniciando na tela chamando a funçaõ de mostrar produtos
//renderizando produtos : renderizar e mostrar na tela
mostrarProdutos();
