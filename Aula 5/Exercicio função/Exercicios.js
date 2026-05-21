//docs
// Lista de produtos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];
let produtos500 = produtos.filter(produto => produto.preco > 500)

console.log(produtos500)

let item = produtos.find(produto => produto.id===2)
console.log(item)

let produtos = produto.slice(nome)
console.log(produto)