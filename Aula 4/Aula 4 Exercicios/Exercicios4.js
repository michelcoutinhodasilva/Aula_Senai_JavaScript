//exercicio 1 Contagem de 1 a 10
for(let i = 1; i <=10; i++){
    console.log(i)
}

//exercicio 2 Tabuada de um número
let numero = Number(prompt("Digite um numero para ver sua taboada: "))
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i))
}
//exercicio 3 Soma dos primeiros N números naturais
let n = Number(prompt("me informe um numero"))
let soma_n = 0
for (let i = 1;i <= n ; i++) {
    soma_n = soma_n+i

}
console.log (soma_n)

//Exibir os números pares de 1 a 50:
let inciarPar=2
let finalPar = 50    

for (let i = inciarPar; i<=finalPar; i++) {
    if(i % 2 == 0)
    console.log(i)
}



