//manipulação de dom
//dom-> document object model
//é a forma como o navegador organiza o html para que o js consiga acessa os elementos

// const { createElement } = require("react")

//principais metodos de seleção de elementos DOM
/*
    getElementById-> serve para selecionar um elemento pelo seu ID
    querySelector -> serve para selecionar o 1° elemento que corresponde a um seletor CSS (tag(ex. p , h1 ,h2), ID ,Nome de classe)
    querySelectorAll -> serve para selecionar TODOS os elementos que correspondem a um seletor.
    getElementsByClassName ->serve para selecionar todos os elementos que correspondem a uma class.
*/
// const titulo = document.getElementById("titulo")
// const valor = document.getElementById("titulo").innerText
// console.log(titulo)
// console.log(valor)

//Queryselector
// const titulo = document.querySelector("#titulo"); // chamando id ->#nomeid
// const paragrafo = document.querySelector(".paragrafo") // chamando classes -> nomeClasse
// const titulo2 = document.querySelector("h2'")// chamando tags -> h2

// console.log(titulo)
// console.log(paragrafo)
// console.log(titulo2)

// //querySectorAll
// const elementos = document.querySelectorAll(".texto");
// //imprime o elemento(p)
// console.log(elementos);
// //imprime o valor que esta dentro do elemento (p)
// elementos.forEach(elemento => console.log(elemento.innerText));


// //trocando o texto que esta dentro do elemento
// elementos.forEach(elementos => elementos.innerText = "alterado")
// console.log(elementos)

// //trocando a TAG
// elementos.forEach(elementos => elementos.innerHTML = "<h2>Item</h2>")

// //troca a cor da fonte (letra)
// elementos.forEach(elementos => elementos.style.color = "#0000FF" )

//eventos 
//eventos são acoes do usuario

//eventos de click
// const botao = document.getElementById("btn")
// //adicionando um "escutador de eventos"no botão
// botao.addEventListener("click", () => {
//     alert("vc clicou!!!!!!!!!")
// } )

// evento de digitação (input / keyup)
// evento input ->dispara que digita, em tempo real
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado")

// // campo.addEventListener("input",()=> {
// //     // value -> e o valor digitado dentro da caixinha de texto
// //     resultado.innerText = campo.value;
// // })

// //evento keyup -> so dispara quando solta tecla
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value
//     console.log("tecla pressionada")
// })

//evento de mouse
// const elemento = document.getElementById("troca-cor")
// const botao = document.getElementById("btn")

// // mouseover -> quando passa o mouse por cima do elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#ff0000"
// } )




// MANIPULAÇÃO DE DOM
// DOM -> Document Object Model
// é a forma como o navegador organiza o html para que o js consiga acessar os elementos

// Principais métodos de seleção de elementos no DOM

/*
    getElementById -> serve para selecionar um elemento pelo seu ID.

    querySelector -> serve para selecionar o 1° elemento que corresponde a um seletor CSS (tag(ex. p, h1, h2), ID, nome de classe)

    querySelectorAll -> serve para selecionar TODOS os elementos que correspondem a um seletor.

    getElementsByClassName -> serve para selecionar TODOS os elementos que correspondem a uma classe.
*/

// // getElementById
// const titulo = document.getElementById("titulo");
// const valor = document.getElementById("titulo").innerText;

// console.log(titulo);
// console.log(valor)

// // querySelector
// const titulo = document.querySelector("#titulo"); // chamando id -> #nomeid
// const paragrafo = document.querySelector(".paragrafo"); // chamando classes -> .nomeclasse
// const tituloH2 = document.querySelector("h2"); // chamando tags -> h2

// console.log(titulo);
// console.log(paragrafo);
// console.log(tituloH2);


// // querySelectorAll
// const elementos = document.querySelectorAll(".texto");
// // imprime o elemento (p)
// console.log(elementos);

// // imprime o valor que está dentro do elemento (p)
// elementos.forEach(elemento => console.log(elemento.innerText));

// // trocando o texto que está dentro do elemento
// elementos.forEach(elemento => elemento.innerText = "Alterado")

// // trocando a tag
// elementos.forEach(elemento => elemento.innerHTML = "<h2>Item</h2>")

// // trocando a cor da fonte (letra)
// elementos.forEach(elemento => elemento.style.color = "#0000FF");

// Eventos 
// Eventos são ações do usuário

// // Evento de click
// const botao = document.getElementById("btn");

// // adicionando um "escutador de eventos" no botão
// botao.addEventListener("click", () => {
//     alert("Você clicou!");
// })

// Evento de digitação (input / keyup)

// // evento input -> dispara sempre que digita, em tempo real
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// // campo.addEventListener("input", () => {
// //     // value -> o valor digitado dentro da caixinha de texto
// //     resultado.innerText = campo.value;
// // });

// // evento keyup -> dispara quando solta a tecla
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
//     console.log("Tecla pressionada");
// })

// // evento de mouse
// const elemento = document.getElementById("troca-cor");
// const botao = document.getElementById("btn");

// // mouseover -> quando passa o mouse por cima do elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#FF0000"
// })

// // mouseout -> quando o mouse sai de cima do elemento
// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#0000FF";
//     botao.style.backgroundColor = "#0000FF";
//     elemento.style.backgroundColor = "";
// })

// // mousemove -> pega a posição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log("Posição de X: ", evento.clientX, " Posição de Y: ", evento.clientY);
// })

//Evento de formulário (submit)
// const form = document.getElementById("form");

// // // comportamento padrão de um formulário é recarregar a página
// // form.addEventListener("submit", (evento) => {
// //     evento.preventDefault(); // impede o comportamento padrão

// //     const nome = document.getElementById("nome").value;
// //     console.log("Nome: " + nome);
// // })

// // criando elementos na pagina
// const novoElemento = document.createElement("p") // cria um elemento <p>
// novoElemento.innerText = "elemento novo criado" // cria um texto no elemento

// form.appendChild(novoElemento)  // estamos adicionando um elemento filho (p) dentro do pau (form)

// const botao = document.createElement("button")
// botao.innerText = "excluir elemento"

// form.appendChild(botao)

// botao.addEventListener("click", (e) => {
//     e.preventDefault()
//     novoElemento.remove()
// })

//adicionando elementos em uma lista não ordenada (ul) atraves de um input
// const input =  document.getElementById("input") // input
// const botao = document.getElementById("add") //button
// const lista = document.getElementById("lista")// (ul)

// botao.addEventListener("click", () => {
//     const valor = input.value // pega o valor digitado na caixinha( input)

//     const li = document.createElement("li")
//     li.innerText = valor; // recebe o texto digitado na caixinha

//     lista.appendChild(li) // <li> vai criar dentro da (ul)

//     input.value = "";
// })
