
// Variáveis
/* 
    let -> Quando o valor da variável pode ser mudar, usamos o let
    var -> Forma antiga de declarar variáveis - evitar usar (esta sendo descontinuada por causar muitos problemas)
    const -> Quando o valor da variável não pode ser mudado, usamos o const
*/

let nome = "Michel";
const idade = 23;
var cidade = "São Paulo";
// console.log() -> imprime valores na tela
console.log(nome);
console.log(idade);

// trocando o valor da variável com let
nome = "Maria";
console.log(nome);

//tentando trocar o valor da variável com const (vai dar erro)
idade = 30;
console.log(idade);

//imprimindo valores juntos
console.log(nome  + cidade);  

//imprimindo valores juntos com texto
console.log("Meu nome é " + nome + " e moro na cidade de " + cidade);7

// //interpolação
console.log(`nome: ${nome}, cidade: ${cidade}`);

// TIPOS PRIMITIVOS

// String -> (texto)
// let mensagem = "Olá, mundo!";
// console.log(typeof mensagem);

// // Number -> (números)
let idade = 25;
let temperatura = 36.5;
console.log(typeof idade);
console.log(typeof temperatura);

// //boolean -> (verdadeiro ou falso)
let estaChovendo = true;
console.log(typeof estaChovendo);

// // undefined -> (Quando não definimos um valor para a variável)
let nome;
console.log(typeof nome);

// //null /object -> usado para ausencia intencional de valor
let endereco = null;
console.log(typeof endereco);

// //conversão dos tipos
// //conversão implícita(automatica)
let soma = "5" + 3;
let sub = "5" - 3;
console.log(typeof soma);
console.log(soma);// 53 string
console.log(typeof sub);
console.log(sub); // 2 number

// //conversão explícita
// //converter string para number
let numero = "10";
let convertido = Number(numero);

// //converter numero para string
let numero2 = 100;

// OPERADORES RELACIONAIS
/*
> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL A
<= MENOR OU IGUAL A
== IGUALDADE (IGNORA O TIPO)
=== iGUALDADE ESTRITA (VERIFICA O TIPO)
!= DIFERENTE (IGNORA O TIPO)
!== DIFERENTE ESTRITO (VERIFICA O TIPO)
*/

//EXEMPLO
console.log(5 > 3);//true
console.log(5 < 3);//false

console.log(5 == "5");//true
console.log(5 === "5");//false ->compara o valor e o tipo

// operadores matemáticos
/*
+ ADIÇÃO
- SUBTRAÇÃO
* MULTIPLICAÇÃO
/ DIVISÃO
% RESTO DA DIVISÃO
** EXPONENCIA
*/

// EXEMPLO
let a = 10;
let b = 5;
console.log(a + b); //  SOMA
console.log(a - b); //  SUBTRAÇÃO
console.log(a * b); //  MULTIPLICAÇÃO
console.log(a / b); //  DIVISÃO
console.log(a % b); // RESTO DA DIVISÃO
console.log(a ** b); // POTENCIAÇÃO

// OPERADORES LÓGICOS
/*
&& E (AND) Operador E
|| OU (OR) Operador OU
! NÃO (NOT) Operador de NÃO
&&
*/
//o Operador e (&&)
// so retorna true quando todas as condiçoes forem verdadeiros

let num1 = 5
let num2 = 5
let num3 = 10

console.log(num1 === num2 && num3 > num2); // True

// o Operador ou (||)
// retorna verdadeiro se pelo menos uma das condições for verdadeira
let num4 = 9
console.log(num1 === num4 || num1 == num2); // True

// o Operador ! (NÃO)
// inverte a condição, se for verdadeiro, retorna falso e vice-versa
let logado = true;
console.log(!logado); // false

console.log(5 != 2); // true
console.log(5 != 5); // false

// ARRAY (lista)
let frutas = ["maçã", "banana", "uva"];
// imprimindo a lsta completa de frutas
console.log(frutas);

// imprimindo uma fruta na posição 1 do array
console.log(frutas[1]); 

// imprimindo o tamanho do array
console.log(frutas.length);

//objetos
let pessoa = {
    nome: "Michel",
    idade: 23,
};
// imprimindo o objeto completo
console.log(pessoa);

// imprimindo o nome da pessoa
console.log(pessoa.nome);

// imprimindo a idade da pessoa
console.log(pessoa.idade);


//array de objetos
let pessoas = [
    {
        nome: "Michel",
        idade: 23
    },
    {
        nome: "Maria",
        idade: 24
    }
];

// recebendo dados do usuário
let nome = prompt("Digite seu nome:");
alert(`Ola, ${nome}`);

function mensagem() {
    alert("Olá, seja bem-vindo!");
}