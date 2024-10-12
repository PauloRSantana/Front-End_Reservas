// Função para carregar os dados do perfil do usuário
function carregarPerfil() {
    var usuario = {
        nome: 'Paulo Santana',
        email: 'paulo@example.com',
        perfil: 'Administrador'
    };

    document.getElementById('nomePerfil').innerText = usuario.nome;
    document.getElementById('emailPerfil').innerText = usuario.email;
    document.getElementById('perfilUsuario').innerText = usuario.perfil;
}

// Chamar a função para carregar o perfil ao carregar a página
window.onload = function() {
    carregarPerfil();
};

// Evento para editar a solicitação
document.getElementById('solicitacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Solicitação editada com sucesso!');
});

// Evento para cancelar a solicitação
document.getElementById('cancelarBtn').addEventListener('click', function() {
    alert('Solicitação cancelada com sucesso!');
});
