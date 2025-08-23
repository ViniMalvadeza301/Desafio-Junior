let recuperarJson = localStorage.getItem("cadastroUsuario"); // pegar json de strings
let jsonObjeto = JSON.parse(recuperarJson); // transformar json de strings em objeto
console.log(jsonObjeto);

function autenticarLogin() {
    let emailInput = document.querySelector(".email-input").value;
    let senhaInput = document.querySelector(".senha-input").value;
    if (jsonObjeto.email === emailInput && jsonObjeto.senha === senhaInput) {
        alert("Bem vindo, " + jsonObjeto.nome + "!");
        window.location.href = "index.html";
        return;
    } else {
        alert("Email ou senha incorretos. Tente novamente!");
        return;
    }
}