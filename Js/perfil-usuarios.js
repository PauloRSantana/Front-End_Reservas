document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('tbody');

    // Função para editar perfil
    function editarPerfil(row) {
        const nome = row.cells[0].innerText;
        const email = row.cells[1].innerText;
        const perfil = row.cells[2].innerText;

        const novoNome = prompt('Novo nome:', nome);
        const novoEmail = prompt('Novo email:', email);
        const novoPerfil = prompt('Novo perfil:', perfil);

        if (novoNome) row.cells[0].innerText = novoNome;
        if (novoEmail) row.cells[1].innerText = novoEmail;
        if (novoPerfil) row.cells[2].innerText = novoPerfil;
    }

    // Função para excluir perfil
    function excluirPerfil(row) {
        if (confirm('Você realmente deseja excluir este perfil?')) {
            tbody.deleteRow(row.rowIndex - 1); // -1 porque o cabeçalho não conta
        }
    }

    // Adicionar eventos aos botões
    tbody.addEventListener('click', function (event) {
        const button = event.target;
        const row = button.closest('tr');

        if (button.classList.contains('btn-primary')) {
            editarPerfil(row);
        } else if (button.classList.contains('btn-danger')) {
            excluirPerfil(row);
        }
    });
});
