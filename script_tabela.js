// Função para carregar os dados do LocalStorage
function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('cadastros')) || [];
    const tabela = document.getElementById('tabelaCadastro').getElementsByTagName('tbody')[0];

    dados.forEach(dado => {
        const row = tabela.insertRow();
        row.innerHTML = `
            <td>${dado.nome}</td>
            <td>${dado.email}</td>
            <td>${dado.telefone}</td>
            <td>${dado.endereco}</td>
        `;
    });
}

// Carregar os dados ao carregar a página
window.onload = carregarDados;

document.getElementById('btnLimparCadastros').addEventListener('click', function() {
    localStorage.removeItem('cadastros');  // Remove a chave 'cadastros' do LocalStorage
    alert('Dados de cadastros apagados.');
});
