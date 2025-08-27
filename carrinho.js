let pegarObj = JSON.parse(sessionStorage.getItem("produtosChave"));
//{name: 'Bola de basquete Spalding - Streetball', price: 98.91, image: 'img/Spalding.jpeg', quantity: 1}//
let produtos = pegarObj;
console.log(produtos);
function carregarProdutos() {

    //Coletar Identificação de onde vamos colocar os produtos no HTML
    const container = document.getElementById("carrinho");
    
    for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i]);

        //Criar div do produto
        const criarDivProduto = document.createElement("div");
        criarDivProduto.className = "produto";

        //Criar div da imagem
        const divImagem = document.createElement("img");
        divImagem.src = produtos[i].image;

        //Criar div do nome
        const divProduto = document.createElement("div");
        divProduto.textContent = produtos[i].name;

        //Criar div do preço
        const divPreco = document.createElement("div");
        divPreco.textContent = "R$ " + produtos[i].price;

        const divQtd = document.createElement("input");
        divQtd.type = "number";
        divQtd.min = 1;
        divQtd.value = produtos[i].quantity;

        divQtd.addEventListener("change", function() {
            produtos[i].quantity = parseInt(divQtd.value);
            sessionStorage.setItem("produtosChave", JSON.stringify(produtos));
            total();
        })

        criarDivProduto.appendChild(divImagem);
        criarDivProduto.appendChild(divProduto);
        criarDivProduto.appendChild(divPreco);
        criarDivProduto.appendChild(divQtd);

        container.appendChild(criarDivProduto);
    }
}

carregarProdutos();

function total() {
    let total = 0;
    for (let j = 0; j < produtos.length; j++) {
        total += produtos[j].price * produtos[j].quantity;
    }
    console.log(total);
    document.getElementById("total").innerHTML = `valor total: R$ ${total.toFixed(2)}`;
}
total();