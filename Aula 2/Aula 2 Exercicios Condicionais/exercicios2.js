// // Exercício 1: Verifição maioridade
// let idade = prompt("Digite sua idade: ");
// if (idade >= 18) {
//     alert("Você é maior de idade.");
// } 
// else {
//     alert("Você é menor de idade.");
// }

// //exercicio 2:Verificar se um número é positivo ou negativo:
// let numero = prompt("Digite um número: ");
// if (numero > 0) {
//     console.log("O número é positivo.");
// }
// else {
//     console.log("O número é negativo.");
// }
// //exercicio 3: aprovação em prova
// let nota = Number(prompt("Digite sua nota: "));
// if (nota >= 60) {
//     console.log("Aprovado!");
// }
// else {
//     console.log("Reprovado!");
// }
// //exercicio 4: verifica se o numero e positivo, negativo ou zero

// let numero = Number(prompt("Digite um número: "));
// if (numero > 0) {
//     alert("O número é positivo.");
// }
// else if (numero < 0) {
//     alert("O número é negativo.");
// }
// else {
//     alert("O número é zero.");
// }

// //exercicio 5: classificar a idade 12<= criança <18 adolescente >=18 adulto
// let idade = Number(prompt("Digite sua idade: "));
// if (idade < 0) {
//     alert("Idade inválida insira um numero positivo.");
// }
// else if (idade >= 0 && idade <= 12) {
//     alert("Você é uma criança.");
// }
// else if (idade >= 12 && idade < 18) {
//     alert("Você é um adolescente.");
// }
// else if (idade >= 18) {
//     alert("Você é um adulto.");
// }

// //exercicio 6: verificar se o numero e par ou impar
// let numero = Number(prompt("Digite um número: "));
// if (numero % 2 === 0) {
//     alert("O número é par.");
// }
// else {
//     alert("O número é impar.");
// }

// //exercicio 7: calculadora simples

// let numero1 = Number(prompt("Digite o primeiro número: "));
// let numero2 = Number(prompt("Digite o segundo número: "));
// let operacao = prompt("Digite a operação (+, -, *, /): ");
// if (operacao === "+") {
//     alert("Resultado: " + (numero1 + numero2));
// }
// else if (operacao === "-") {
//     alert("Resultado: " + (numero1 - numero2));
// }
// else if (operacao === "*") {
//     alert("Resultado: " + (numero1 * numero2));
// }
// else if (operacao === "/") {
//         alert("Resultado: " + (numero1 / numero2));
// }
// else {
//     alert("Operação inválida.");
// }  
// //exercicio 8: maior numero entre tres numeros
// let numero1 = Number(prompt("Digite o primeiro número: "));
// let numero2 = Number(prompt("Digite o segundo número: "));
// let numero3 = Number(prompt("Digite o terceiro número: "));

// if (numero1 >= numero2 && numero1 >= numero3) {
//     alert("O maior número é: " + numero1);
// }
// else if (numero2 >= numero1 && numero2 >= numero3) {
//     alert("O maior número é: " + numero2);
// }
// else {
//     alert("O maior número é: " + numero3);
// }
// //exercicio 9: desconto de compra
// let valorCompra = 100
// if (valorCompra > 100) {
//     let desconto = valorCompra * 0.1;
//     let valorFinal = valorCompra - desconto;
//     alert("Valor final com desconto: " + valorFinal);
// }
// else {    
//     alert("Valor final: " + valorCompra);
// }
// //exercicio 10; usuario e senha
// let usuario = prompt("Digite o nome de usuário: ");
// let senha = prompt("Digite a senha: ");
// if (usuario === "admin" && senha === "1234") {
//     alert("Acesso concedido!");
// }
// else {
//     alert("Acesso negado!");
// }
// //exercicio 11: frete de pedido
// let valorPedido = Number(prompt("Digite o valor do pedido: "));
// if (valorPedido >= 100) {
//     alert("Frete grátis!");
// }
// else if (valorPedido >= 50) {
//     alert("10 reais de frete");
// }
// else {
//     alert("20 reais de frete");
// } 
// //exercicio 12:acesso por idade ou convite
// let idade = Number(prompt("Digite sua idade: "));
// let temConvite = Boolean(prompt("Você tem um convite? (sim/não): ").toLowerCase());

// if (temConvite === true){
//     alert("acesso liberado")
// }
// else if (idade >= 18){
//     alert("aceso liberado")
// }
// else {
//     alert ("acesso negado")
// }

//exercicios 13; conversão de nota para conceito
// let nota = Number(prompt("digite sua nota de 0 a 100"))

// if (nota >= 90 && nota <= 100) {
//     alert("sua nota é A")
// }
// else if (nota >= 80 && nota <= 89) {
//     alert("sua nota é B")
// }
// else if (nota >= 70 && nota <=79 ){
//     alert("sua nota e C")
// }
// else if (nota >=60 && nota <=69){
//     alert("Sua nota é D")
// }
// else
//     alert ("sua nota e F")

//exercicio 14:Verificação de estoque
let QuantidadeEstoque = Number(prompt("Digite a quantidade em estoque"))
if (QuantidadeEstoque>=10)
    alert ("Produto disponivel")
else if(QuantidadeEstoque<10 && QuantidadeEstoque > 0){
    alert("Últimas unidades")
}
else 
    alert("produto não disponivel")
