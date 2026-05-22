//manipulação de dom
//dom-> document object model
//é a forma como o navegador organiza o html para que o js consiga acessa os elementos

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

//querySectorAll
const elementos = document.querySelectorAll(".texto");
//imprime o elemento(p)
console.log(elementos);
//imprime o valor que esta dentro do elemento (p)
elementos.forEach(elemento => console.log(elemento.innerText));


//trocando o texto que esta dentro do elemento
elementos.forEach(elementos => elementos.innerText = "alterado")
console.log(elementos)

//trocando a TAG
elementos.forEach(elementos => elementos.innerHTML = "<h2>Item</h2>")

//troca a cor da fonte (letra)
elementos.forEach(elementos => elementos.style.color = "#0000FF" )

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
const elemento = document.getElementById("troca-cor")
const botao = document.getElementById("btn")

// mouseover -> quando passa o mouse por cima do elemento
elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "#ff0000"
} )

