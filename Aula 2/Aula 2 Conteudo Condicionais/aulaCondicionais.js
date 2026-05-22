// Estrutura condicional 
// temos condiçoes e decidimos os caminhos que vamos seguir na estrtura.
/*
IF (Se) -> SE (se chover...)
ELSE (Senao) -> SENAO (senao chover...)
ELSE IF -> SENAO SE 
SWITCH/CASE -> CASO (como se fosse um menu de opçoes, cada case é uma opção)
*/

// let nome = prompt("Digite seu nome: ")
// console.log(nome)

// Exemplos:
// 1. Sistema de verificação de temperatura
// Tudo que e digitado atraves do prompt é considerado texto, etão vamos converter para numero, para que a validação não tenha problema
// let temperatura = Number(prompt("Digite a temperatura atual: "));
// if (temperatura < 20) {
//     console.log("Está frio");   
// }
// else{
//     console.log("Está quente");
// }
// 2.Verificar o nivel da bateria
// let bateria = Number(prompt("Digite o nivel da bateria (%): "));

// if (bateria <= 30) {
//     alert("Bateria nivel baixo");
// }
// else {
//     alert("bateria carregada!");
// }
// 3. sistema de acesso
// let tipoUsuario = prompt("Digite o tipo de usuario (admin, cliente): ");
// tipoUsuario = tipoUsuario.toLowerCase(); 

// if (tipoUsuario === "admin") {
//     console.log("Acesso total ao sistema!");
// } else if (tipoUsuario === "cliente") {
//     console.log("Acesso limitado ao sistema.");
// } else {
//     console.log("Tipo de usuário inválido.");
// }

//4. Classificação a qualidade da internet
// let velocidade = Number(prompt("Digite a velocidade da internet (Mbps): "));
// if (velocidade >= 100) {
//     console.log("Internet rápida");
// }
// else if (velocidade >= 50) {
//     console.log("Internet moderada");
// }
// else {
//     console.log("Internet lenta");
// }

//5. analisar o volume de itens
// let quantidade =10;
// if (quantidade === 0) {
//     console.log("nenhum itens");
// }
// else if (quantidade < 5) {
//     console.log("Poucos itens");
// }
// else if (quantidade >= 5 && quantidade < 10) {
//     console.log("Quantidade media de itens");
// }
// else {
//     console.log("Muitos itens");
// }

//condicional Aninhada
//6. uma condicional dentro da outra
// const nota = 5
// if (nota >= 7) {
//     if (nota === 10) {
//         console.log("Aprovado com premiação");
//     }
//     else {
//         console.log("Aprovado");
//     }
// }
// else {
//     console.log("Reprovado");
// }

// 7. adaptação de tela de dispositivo
// let dispositivo = prompt("Voce esta usando: celular, tablet ou computador? ");
// dispositivo = dispositivo.toLowerCase();

// if (dispositivo === "celular" || dispositivo === "tablet") {
//     console.log("Tela adaptada para mobile");
// }
// else if (dispositivo === "computador") {
//     console.log("Tela adaptada para desktop");
// }
// else {
//     console.log("Dispositivo desconhecido");
// }

// 8. Switch case
//mudar o tema do sistema
let tema = prompt("Escolha um tema: claro, escuro, azul ou digite sair");
tema = tema.toLowerCase();

switch (tema) {
    case "claro":
        console.log("Tema claro selecionado");
        document.body.style.backgroundColor = "#FFFFFF";
        break;
    case "escuro":
        console.log("Tema escuro selecionado");
        document.body.style.backgroundColor = "#000000";
        break;
    case "azul":
        console.log("Tema azul selecionado");
        document.body.style.backgroundColor = "#0000ff";
        break;
    default:
        console.log("Tema inválido");
}
