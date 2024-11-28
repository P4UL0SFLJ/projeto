/* PAGINA 1 */

// Função que alterna a visibilidade da seção
function toggleSection(sectionId, arrowId) {
    var section = document.getElementById(sectionId); // Obtém a seção pelo ID
    var arrow = document.getElementById(arrowId); // Obtém a seta correspondente pelo ID
    var sectionDisplay = window.getComputedStyle(section).display;

    // Verifica se a seção está oculta ou visível e alterna seu estado
    if (sectionDisplay === "none" || sectionDisplay === "") {
        section.style.display = "block"; // Mostra a seção
        arrow.style.transform = "none"; //Seta para cima
    }
    else {
        section.style.display = "none"; // Esconde a seção
        arrow.style.transform = "rotate(180deg)"; //Seta para baixo
    }
}

// Função do menu
function abreMenu() {
    document.getElementsByClassName('menu-container')[0].style.width = '45%'
    document.getElementById('fundo').style.display = 'block'
}
function fecharMenu() {
    document.getElementsByClassName('menu-container')[0].style.width = '0%'
    document.getElementById('fundo').style.display = 'none'
}

//Função p/ rolagem dos perfis
function rolagem(idPerfil) {
    var cardperfil = document.getElementById(idPerfil);

    cardperfil.addEventListener('mouseenter', function () { //rolagem apenas ativa com o mouse encima do card
        cardperfil.style.overflowY = 'auto'; //ativa a rolagem
    });
    cardperfil.addEventListener('mouseleave', function () { //rolagem apenas desativa sem o mouse encima do card
        cardperfil.style.overflowY = 'hidden'; //desativa e esconde a rolagem
    });
}

/* Função para abrir links */
function abrirLink(url) {

    if (url === '' || url === 'none'){
        alert('Esse(a) integrante não possui esta rede social!')
    }
    else{
        window.open(url, "_blank");
    }
}

/* --------------------------------------------------------------------- */
/* PAGINA 2 */
/* função rolagem dos cards */
function rolagem(conteudo) {
    var cardconteudo = document.getElementById(conteudo);

    cardconteudo.addEventListener('mouseenter', function () { //rolagem apenas ativa com o mouse encima do card
        cardconteudo.style.overflowX = 'auto'; //ativa a rolagem
    });
    cardconteudo.addEventListener('mouseleave', function () { //rolagem apenas desativa sem o mouse encima do card
        cardconteudo.style.overflowX = 'hidden'; //desativa e esconde a rolagem
    });
}
//Esconde e desativa a rolagem do eixo Y
document.addEventListener('DOMContentLoaded', function () {
    var body = document.getElementById('bodycont')
    var container = document.getElementById('container-conteudo');
    var flexDirection = window.getComputedStyle(container).flexDirection;
    
    if (flexDirection === 'column') {
        body.style.overflowY = 'auto';
    }
    else{
        body.style.overflowY = 'hidden';
    }
});

/* --------------------------------------------------------------------- */
/* PAGINA 3 */
//Mostra a data atual no campo "Data de nascimento:"
document.addEventListener("DOMContentLoaded", () => {
    var dateInput = document.getElementById("idate");
    var today = new Date();
    var formattedDate = today.toISOString().substr(0, 10);
    dateInput.value = formattedDate;
});

// Mostra uma mensagem de sucesso do formulário no navegador
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registrar-formulario');

    // Adiciona um evento de envio ao formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        alert('Formulário enviado com sucesso!');

        // Opcional: Limpa o formulário após o envio
        form.reset();
    });
});

//Confer se a senha está correta
function confereSenha() {
    var password = document.querySelector('input[name=password]');
    var confirmPassword = document.querySelector('input[name=confirmPassword]');

    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity('');
    } else {
        confirmPassword.setCustomValidity('As senhas não conferem');
    }
}
// Função para exibir o form de login "ja possui conta"
function logar() {
    /* var entrarLink = document.getElementById('entrar-link'); */ //botao para mostar formulario de login
    var sectionVazia = document.getElementById('formularioOculto')
    var loginsection = document.getElementById('entrarsection'); //container com o formulario de login e texto informativo
    var possuicontasection = document.getElementById('login'); // section do "ja possui conta?""
    var registrarFormulario = document.getElementById('registrar-formulario'); //formulario para cadastro
    var legend1 = document.getElementById('legend1'); // text informativo
    var legend2 = document.getElementById('legend2'); // texto informativo
    var contatosection = document.getElementById('contato'); // section "contato com adm"
    var contatosection2 = document.getElementById('contatoLogin'); // section "contato com adm" na tela de login

    registrarFormulario.classList.toggle('sumir');
    registrarFormulario.style.display = 'none';
    registrarFormulario.style.transition = '0.5s';

    legend1.style.display = 'none';
    legend2.style.display = 'none';
    possuicontasection.style.display = 'none';
    contatosection.style.display = 'none';

    sectionVazia.style.display = 'block';
    loginsection.style.display = 'block';
    contatosection2.style.display = 'block';
}
/*  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    opacity: 0;
    transform: translateY(-20px); */

// Icone - senha
var passwords = document.querySelectorAll('input[type="password"]');
var buttons = document.querySelectorAll('.show');

passwords.forEach((password, index) => {
    var btn = buttons[index];
    password.addEventListener("keyup", () => mostrar(password, btn));
    btn.addEventListener("click", () => toggle(password, btn));
});

function mostrar(password, btn) {
    if (password.value != "") {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
function toggle(password, btn) {
    if (password.type === "password") {
        password.type = "text";
        btn.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
    } else {
        password.type = "password";
        btn.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
    }
}