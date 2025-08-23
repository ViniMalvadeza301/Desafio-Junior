let banco = [];

function adicionarDados(nome, email, senha) {

    for (let i = 0; i < banco.length; i++) {
        if (banco[i].email ===  email) {
            alert("O email já foi cadastrado! Tente novamente com outro email ou use o email já cadastrado no banco!");
            return;
        }
    }
    let cadastro = {nome, email, senha};
    banco.push(cadastro);
    localStorage.setItem("cadastroUsuario", JSON.stringify(cadastro)); //Criando o JSON em formato String
    window.location.href = "login.html";
}

function coletarDados() {
    let nomeUsuario = document.querySelector(".usuario-input").value;
    let emailUsuario = document.querySelector(".email-input").value;
    let senhaUsuario = document.querySelector(".senha-input").value;
    
    adicionarDados(nomeUsuario, emailUsuario, senhaUsuario);
}

