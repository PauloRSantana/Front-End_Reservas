document.getElementById('solicitarEspacoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var espaco = document.getElementById('espaco').value;
    var data = document.getElementById('data').value;
    var horario = document.getElementById('horario').value;

    if (espaco === '' || data === '' || horario === '') {
        alert('Preencha todos os campos.');
        return false;
    }

    alert('Solicitação enviada com sucesso!');
    // Aqui você pode adicionar a lógica para salvar a solicitação no servidor
});
