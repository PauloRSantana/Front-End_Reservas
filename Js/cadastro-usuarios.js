document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para fins de validação

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (nome === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('As senhas não correspondem.');
        return false;
    }

    alert('Usuário cadastrado com sucesso!');
    // Aqui você pode adicionar lógica para enviar os dados ao servidor ou salvar localmente.
});
