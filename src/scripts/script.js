const login = {
    email: "carlos@gmail.com",
    senha: "senha123"
}

const formulario = document.getElementById("loginUsuario")

formulario.addEventListener("submit", (event) => {

    //impede de recarregar a página
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(email === login.email && senha === login.senha){
        window.location.href = "index.html"
    }else{
        alert("Email ou senha inválidos.")
    }
})