document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('spaceForm');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const spaceName = document.getElementById('spaceName').value;
        const capacity = document.getElementById('capacity').value;
        const location = document.getElementById('location').value;
        const resources = document.getElementById('resources').value;
        
        // Exemplo de como armazenar ou enviar dados para o servidor
        console.log(`Espaço cadastrado: ${spaceName}, Capacidade: ${capacity}, Localização: ${location}, Recursos: ${resources}`);
        
        alert('Espaço cadastrado com sucesso!');
        form.reset();
    });
});
