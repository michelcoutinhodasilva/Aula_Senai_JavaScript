// Funções nativas do JavaScript
// Ajudam a manter um código limpo e organizado e evita muita repetição de código

// // MAP -> Percorre uma lista e cria uma nova lista com base em uma condição
// let numeros = [1, 2, 3, 4];
// let numerosDobrados = numeros.map(function(num){
//     return num * 2;
// });

// console.log(numerosDobrados);

// // mesma função, mas agora com arrow function
// let numerosDobrados2 = numeros.map(num => num * 2);
// console.log(numerosDobrados2);

// numeros.map(num => {
//     let resultado = num * 2;
//     return resultado;
// })

// console.log(teste);

// // IF Ternário
// // se for verdadeiro -> a resposta vem depois da interrogação
// // se for falso -> a resposta vem depois dos dois pontos
// // se depois dos dois pontos tiver outra condição, a gente volta para o começo
// let resposta = (idade > 18) ? "maior de idade" : "menor de idade";
// let resposta2 = (idade > 18) ? "maior de idade" : (idade > 75) ? "idoso" : "menor de idade";

// // FILTER -> Filtra os elementos de uma lista com base em uma condição
// let numeros2 = [5, 10, 15, 20];
// let maiorQueDez = numeros2.filter(num => num > 10);
// console.log(maiorQueDez); // [15, 20]

//REDUCE -> REDUZ OS VALORES DE UM ARRAY PARA UM UNICO VALOR
// let numeros =[1,2,3,4]
// //acumulador
// // variavel auxiliar
// // 0-> é o valor inicial do acumulador 
// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0)
// console.log(soma)

// find -> retorna o primeiro elemento que atende uma condição
// let produtos = [
//     {id: 1, nome: "teclado", preco: 50,},
//     {id: 2, nome: "mouse", preco: 30}
// ]

// let item = produtos.find(produto => produto.id===2)
// console.log(item)

// //  trim -> remove espaços no inicio de uma frase de uma sting
// nome = "     joão   "
// nome2= "           joão                  "
// let nomeLimpo = nome.trim();

// console.log(nomeLimpo)
// console.log(nome2)

// // includes -> verifica se tem um valor dentro de uma lista ou string
// let frutas = ["maça", "banana"]

// let frutasExiste = frutas.includes("banana"); // booleano
// console.log(frutasExiste);
// console.log();

// //toLowercase -> transforma o texto em minusculo
// //toUperCase -> transforma o texto em maiuscula
// let nome = "MICHEL"
// let cargo = "instrutora"
// console.log(nome.toLocaleLowerCase);//michel
// console.log(cargo.toUpperCase);//INSTRUTORA

// foreach -> percorrre todos os elementos do array
// let nomes = ["pedro", "joão", "beatriz"]
// nomes.forEach(nome=>console.log("seu nome é: " + nome))

//some -veridica se pelo menos um item da lista atende a condição
// let numeros = [1,3,5,8]
// let temPar = numeros.some(num => num% 2===0)//true ou false
// console.log(temPar) //true

// //Every -> verifica se todos os elementos da lista atendem a uma condição
// let todosPares = numeros.every(num=> num % 2 ===0)
// console.log(todosPares);//false

// sort -> Ordena os elementos de uma lista
// let numeros = [1,10,5,2,4]
// let letras = ["c","a","x","h"]
// //ordenando letras
// letras.sort()
// console.log(letras)
// //ordenando numeros
// numeros.sort((a,b) => a-b)
// console.log(numeros)

// // reverse  -> inverte a ordem de um array
// numeros.reverse()
// console.log(numeros)

// //join -> junta os elementos de um array em uma string
// let palavras = ["js","é","muito","bom"]
// let frase = palavras.join("-")
// console.log(frase)

// PUSH -> adicionar elementos no final do array
// POP -> Remover elementos no final do array

// let lista = ["A", "B"]
// lista.push("C")// adicionando
// console.log(lista);
// lista.pop();// removendo
// console.log(lista);

//SHIFT -> remover elementos do inicio do array
//UNSHFIT-> adicionar elementos no inicio do array

// let lista  = ["B","C"]
// lista.unshift("A") // adiciona no inicio
// console.log(lista)
// lista.shift() // remove o do inicio
// console.log(lista)

//SLICE -> Criar uma copia de uma parte da lista
/*
array.slice(inicial, final)
inicial ->onde começa a copiar o array
final -> onde para (não inclui a posição final (indice / index))
*/
// let numeros = [1,2,3,4]
// let copia = numeros.slice(1,3)
// console.log(copia)

//SPLICE -> remove ou adiciona elementos em qualquer posição
/*
array.splice(indice,count, item1,..., itemX)
indice-> posição do elemento no array(index)
count -> numero de itens a serem removidos(pode ser 0)
item -> item que vão ser adicionado
*/
// let numeros =[1,2,3,4]
// numeros.splice (1,1)
// console.log (numeros)

// let frutas = ["banana","laaranja","maça","manga"]
// frutas.splice(0,3, "limão" ,"kiwi")
// console.log(frutas)

// let frutas = ["banana","laaranja","maça","manga"]
// frutas.splice(2,0,"limão","kiwi")
// console.log(frutas)

//replace -> substitui uma parte da string
// // replace,(valorprocurado, valorsubstituido)
// let texto = "ola mundo"

// let novoTexto= texto.replace("mundo","cliente")
// console.log(novoTexto)

//SPOLER........................
// let textoP=document.getElementById("texto");
// let saudacao = prompt("digite uma saudação: ")
// textoP.textContent = saudacao == "bom dia" ? saudacao : "QUINTOOOOOOOOOOOU!!!!";