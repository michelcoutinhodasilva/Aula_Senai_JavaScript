//exercicio 1 Contagem de 1 a 10
// for(let i = 1; i <=10; i++){
//     console.log(i)
// }

// //exercicio 2 Tabuada de um número
// let numero = Number(prompt("Digite um numero para ver sua taboada: "))
// for (let i = 1; i <= 10; i++) {
//     console.log(numero + " x " + i + " = " + (numero * i))
// }
//exercicio 3 Soma dos primeiros N números naturais
// let n = Number(prompt("me informe um numero"))
// let soma_n = 0
// for (let i = 1;i <= n ; i++) {
//         soma_n = soma_n+i

//     }
//     console.log (soma_n)

// exercicio 4:Exibir os números pares de 1 a 50:
// let inciarPar=2
// let finalPar = 50    

// for (let i = inciarPar; i<=finalPar; i++) {
//     if(i % 2 == 0)
//     console.log(i)
// }
//
//exercicio 5 advinha numeros
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinhar() {
  while (true) {
    const entrada = prompt("Adivinhe o número (1 a 100):");
    if (entrada === null) {
      alert("Jogo encerrado. O número era: " + numeroSecreto);
      break;
    }

    const palpite = parseInt(entrada);
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      alert("Digite um número válido entre 1 e 100.");
      continue;
    }

    tentativas++;

    if (palpite < numeroSecreto) {
      alert(`Muito baixo! Tente um número maior. (Tentativa ${tentativas})`);
    } else if (palpite > numeroSecreto) {
      alert(`Muito alto! Tente um número menor. (Tentativa ${tentativas})`);
    } else {
      alert(`Parabéns! Você acertou em ${tentativas} tentativa(s)!
        número era ${numeroSecreto}.`);
      break;
    }
  }
}

adivinhar();



