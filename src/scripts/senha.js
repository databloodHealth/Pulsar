function toggleCheckbox() {
    const checkbox = document.querySelector('.checkbox');
    const checkmark = checkbox.querySelector('.checkmark');
    checkbox.classList.toggle('checked');
    if (checkbox.classList.contains('checked')) {
        checkmark.style.display = 'block';
    } else {
        checkmark.style.display = 'none';
    }
    event.preventDefault();
}

const senhaInput = document.getElementById('senha');
const confSenha = document.getElementById('conf-senha')
const toggleIcon = document.querySelector("#toggleSenha");
const toggleOffIcon = document.querySelector("#toggleSenhaOff");
const toggleConf = document. querySelector("#toggleConf")
const toggleConfOff = document. querySelector("#toggleConfOff")
toggleIcon.addEventListener('click', mostrarSenha);
toggleOffIcon.addEventListener('click', ocultarSenha);
toggleConf.addEventListener('click', mostrarConf)
toggleConfOff.addEventListener('click', ocultarConf);

function mostrarSenha() {
    senhaInput.type = 'text';
    toggleIcon.style.display = 'none';
    toggleOffIcon.style.display = 'block';
}

function ocultarSenha() {
    senhaInput.type = 'password';
    toggleIcon.style.display = 'block';
    toggleOffIcon.style.display = 'none';
}

function mostrarConf() {
    confSenha.type = 'text';
    toggleConf.style.display = 'none';
    toggleConfOff.style.display = 'block';
}

function ocultarConf() {
    confSenha.type = 'password';
    toggleConf.style.display = 'block';
    toggleConfOff.style.display = 'none';
}

const formulario = document.querySelector(".create_senha_form");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const senha = senhaInput.value;
    const confSenhaValue = confSenha.value;
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
    } else if (senha === confSenhaValue) {
        if (!document.querySelector('.checkbox').classList.contains('checked')) {
            alert("Você deve concordar com os Termos de Uso e a Política de Privacidade para finalizar o cadastro.");
        } else {
            formulario.requestSubmit();
        }
    } else {
        alert("As senhas não coincidem. Por favor, tente novamente.");
    }
});