console.log ("----LANCHONETE----")
let cliente = prompt("qual seu nome")
console.log(`Cliente:${cliente}`);
let produto_escolhido = prompt("Qual lanche você quer? (X-Bacon ou X-Burger)")
console.log(`Produto:${produto_escolhido}`);
let produtos = [
    {
        nome_do_produto: "x-bacon",
        preco_do_produto: 30
    },
    {
        nome_do_produto: "x-burger",
        preco_do_produto: 20
    }
];
let quantidade = Number(prompt("quantos lanches o senhor vai querer levar?"))
let encontrado = false;

for (let item of produtos) {
    if (item.nome_do_produto.toLocaleLowerCase() === produto_escolhido.toLocaleLowerCase()) {
        let total = item.preco_do_produto * quantidade;

        console.log(`Preço unitário:R$${item.preco_do_produto}`);
        console.log(`Quantidade:${quantidade}`);
        console.log(`Total da compra:R$${total}`);
        console.log("Pedido realizado com sucesso!");
        console.log("Obrigado pela preferência.");

        encontrado = true;
        break
    }
}   
if (!encontrado){
    alert("produto não encontrado")
}






