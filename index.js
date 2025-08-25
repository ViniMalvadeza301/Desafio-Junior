const produtos = [];
function mandarInfo() {
    sessionStorage.setItem("produtosChave", JSON.stringify(produtos));
    window.location.href = 'carrinho.html';
}


function adicionarProduto(botaoThis) {
    let productName = botaoThis.getAttribute("data-name");
    let productPrice = parseFloat(botaoThis.getAttribute("data-price"));
    
    let verificarElemento = produtos.find(i => i.name === productName); // find é tipo um loop que passa por todo array

    if (verificarElemento) {
        alert("Produto já está no carrinho!");
    } else {
        produtos.push({name: productName, price: productPrice, quantity: 1});
        alert("Produto adicionado ao carrinho!");
    }
    console.log(produtos);
}