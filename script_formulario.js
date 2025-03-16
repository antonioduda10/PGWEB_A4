// Referência aos elementos
const formCadastro = document.getElementById('formCadastro');
const btnSalvar = document.getElementById('btnSalvar');
const btnLimpar = document.getElementById('btnLimpar');

// Função para salvar os dados no LocalStorage
function salvarDados() {
    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value,
    };

    let dadosExistentes = JSON.parse(localStorage.getItem('cadastros')) || [];
    dadosExistentes.push(dados);
    localStorage.setItem('cadastros', JSON.stringify(dadosExistentes));

    alert('Dados salvos com sucesso!');
    formCadastro.reset();
}

// Função para limpar os campos
function limparCampos() {
    formCadastro.reset();
}

// Event Listeners
btnSalvar.addEventListener('click', salvarDados);
btnLimpar.addEventListener('click', limparCampos);
