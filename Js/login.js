document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para fins de validação

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Simulação de validação de login
    if (email === 'admin@example.com' && password === '123456') {
        alert('Login realizado com sucesso!');
        // Redirecionar para a página de dashboard
        window.location.href = 'pagina_de_perfis.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});
