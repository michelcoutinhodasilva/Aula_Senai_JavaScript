// Exercício 1: perfil
let nome = "Michel";
let idade = 23;
let profissao = "Desenvolvedor";
let cidade = "São Paulo";

console.log(`meu nome é ${nome}, tenho ${idade} anos, trabalho como ${profissao} e moro em ${cidade}`);

// Exercício 2: soma (arrumar a forma que foi falado)
let produto = "biscoito";
let preco = 5.00;
let quantidade = 2;
console.log (`Comprei ${produto} unidades de ${quantidade} por R$${preco} cada.`)

// Exercício 3: calcule valores
let numero1 = 10;
let numero2 = 5;
console.log(numero1 + numero2 + " (soma)"); // Soma
console.log(numero1 - numero2 + " (subtração)"); // Subtração
console.log(numero1 * numero2 + " (multiplicação)"); // Multiplicação
console.log(numero1 / numero2 + " (divisão)"); // Divisão

// Exercício 4: tipos

let idade2 = 23; // Número
let nome2 = "Michel"; // String
let ligado = true; // Booleano
let objeto = null; // Null
let indefinido = undefined;// Undefined
console.log(typeof idade2); // Número
console.log(typeof nome2); // String
console.log(typeof ligado); // Booleano
console.log(typeof objeto); // Null
console.log(typeof indefinido); // Undefined

// Exercício 5: conversão
let numero5 = "100";
console.log(numero5); // "100" (string)
let convertido = Number(numero5);
console.log(convertido); // 100 (número)
let numero = "100";
console.log(numero); // "100" (string)

// Exercício 6 desafio

var nome6 = "Michel";
let idade6 = 23;
let autura6 = 1.75;
let peso6 = 70;
let cidade6 = "São Paulo";
let profissao6 = "Desenvolvedor";

console.log(`cadastro do usuario:
Nome: ${nome6}
Idade: ${idade6}
Altura: ${autura6}
Peso: ${peso6}
Cidade: ${cidade6}
Profissão: ${profissao6}`);