document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('spaceForm'); // ID corrigido
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const spaceName = document.getElementById('nomeEspaco').value; // ID corrigido
        const capacity = document.getElementById('capacidade').value; // ID corrigido
        const resources = document.getElementById('recursos').value; // ID corrigido
        
        // Exemplo de como armazenar ou enviar dados para o servidor
        console.log(`Espaço cadastrado: ${spaceName}, Capacidade: ${capacity}, Recursos: ${resources}`);
        
        alert('Espaço cadastrado com sucesso!');
        form.reset();
    });
});
