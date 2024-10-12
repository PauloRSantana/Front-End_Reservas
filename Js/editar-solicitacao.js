function carregarPerfil() {
    // Suponha que os dados do perfil venham de um servidor
    var usuario = {
        nome: 'Paulo Santana',
        email: 'paulo@example.com',
        perfil: 'Administrador'
    };

    document.getElementById('nomePerfil').innerText = usuario.nome;
    document.getElementById('emailPerfil').innerText = usuario.email;
    document.getElementById('perfilUsuario').innerText = usuario.perfil;
}

// Função para editar perfil
function editarPerfil() {
    var novoNome = prompt('Digite seu novo nome:');
    if (novoNome) {
        document.getElementById('nomePerfil').innerText = novoNome;
    }
}
