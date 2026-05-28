const inputPedidos = document.getElementById("inputPedido");
const botaoAdicionar = document.getElementById("btnAdicionar");
const listaPedidos = document.getElementById("listaPedido");

let produtos = []

function salvaPedidos(){
    localStorage.setItem("produtos", JSON.stringify(produtos))  
}

function mostrarPedidos(){
    listaPedidos.innerHTML = ""

    for (let i = 0; i < produtos.length; i++{
        const li = document.createElement("li")
        li.innerText = produtos[i]
        
    })
}

