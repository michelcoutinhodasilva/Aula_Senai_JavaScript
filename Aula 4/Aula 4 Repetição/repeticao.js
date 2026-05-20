// ─────────────────────────────────────────────────────────────
// ESTRUTURA DE REPETIÇÃO (LOOP)
// Permite executar um bloco de código múltiplas vezes,
// com base em uma condição que controla o número de execuções.
//
// Tipos disponíveis em JavaScript:
//   FOR       → quando se sabe quantas vezes repetir
//   WHILE     → enquanto uma condição for verdadeira
//   DO WHILE  → executa ao menos uma vez, depois verifica
//   FOREACH   → percorre cada item de uma coleção
// ─────────────────────────────────────────────────────────────

// FOR
// Usamos quando sabemos exatamente quantas vezes o bloco
// de código deve se repetir (número de iterações definido).
//
// Anatomia: for (inicialização ; condição ; iterador)
//
//   let i = 1   → INICIALIZAÇÃO: cria a variável de controle "i"
//                 com valor inicial 1. Só é executada uma vez,
//                 antes do loop começar.
//
//   i <= 5      → CONDIÇÃO: define o limite de repetições.
//                 "Enquanto i for menor ou igual a 5, execute
//                 o bloco." Quando i = 6, a condição é falsa
//                 e o loop para.
//
//   i++         → ITERADOR: incrementa o valor de i após cada
//                 repetição. i++ é equivalente a i = i + 1.
//                 Garante que o loop avance e não fique infinito.

// FOR
// for (let i = 4 ; i <= 5 ; i++) {
//     console.log("oi")  // → imprime "oi" 2 vezes (i=4 e i=5)
// }

// WHILE
// let contador = 1;
// while(contador <=3){
//     console.log("Repetindo")
//     console.log(contador)
//     contador++ //contador recebe ele mesmo + 1
// }

// DO WHILE
// executa pelo menos uma vez antes da condição
// executa, depois pergunta
// let numero = 1;
// do{
//     console.log("Executou pelo menos uma vez")
//     numero++
// }
// while (numero<3); //falso

// let numero2 = 1
// // diferença ->
// // while pergunta e depois executa
// // do while executa e depois pergunta
// while(numero2 < 3){
//     console.log("Executou aqui")
//     numero2++
// }

// FOREACH -> usado para percorrer lista de elementos
// let nomes =["davi","felipe","amanda"];

// // para cada nome na lista imprima o nome
// // foreach simplificada -> arrow function (função lambda ** usando setinha)
// nomes.forEach(nome=>{
//     console.log("nome: "+ nome)
//     console.log(nomes[1])
// })

// // função utilizando function
// nomes.forEach(function(nome){
//     console.log("Nome: "+ nome)
// })

// Sistema de intervalo definido pelo usuario
// let inicio = Number(prompt("Digite o numero inicial: "))
// let fim = Number(prompt("Digite o numero final: "))
// for(let i = inicio; i <= fim ; i++){
//     console.log(i)
// }

// // i += 5 -> soma 5 no i, pulando de 5 em 5
// for(let i = inicio; i<= fim; i+=5){
//     console.log(i)
// }

// While com condição para sair do sistema
// let valor = "";
// while(valor != "sair"){
//     valor = prompt("digite algo ou sair para parar")
//     console.log("voce digitou "+ valor);
// }

// Contador de 1 a 10 (com regra)
// let limite = Number(prompt("Mostrar numeros maiores que: "))
// for(let i = 1; i<=10; i++){
//     if(i > limite){
//         console.log(i)
//     }
// }

// Percorrendo um array usando for
// let cores =["azul","verde","vermelho"]
// // tamanho 3
// // posição (indice) começa em zero e vai até 2

// // length -> tamanho (pega o tamanho da lista)
// for (let i = 0; i< cores.length; i++){
//     console.log("posição da cor: " + i + "-" + cores[i])
// }

// Condição dentro do foreach
// let numeros = [3,7,10,15]
// numeros.forEach(num => {
//     if(num > 8){
//         console.log("numero maior que 8: "+num)
//     }
// })

// Percorrendo objetos com for...in
let pessoa = {
    nome: "carlos",
    idade: 20,
    profissao: "desenvolvedor"
};

// for...in -> usamos para objetos (retorna chave/índice)
for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// for...of -> usamos para arrays, retorna o valor de cada item
const produtos = [
    {
        nome: "notebook",
        preco: 3500,
        estoque: 15
    },
    {
        nome: "teclado",
        preco: 200,
        estoque: 8
    },
    {
        nome: "mouse",
        preco: 300,
        estoque: 10
    }
]

// acessando o nome de cada produto com for...of
for (let produto of produtos) {
    console.log(produto.nome)
}

// imprimindo informaçoes
for (let produto of produtos){
    console.log(`Produto: ${produto.nome}       | preço: ${produto.preco}`)
}