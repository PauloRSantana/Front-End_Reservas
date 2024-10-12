document.querySelectorAll('.aprovarSolicitacao').forEach(function(button) {
    button.addEventListener('click', function() {
        var solicitacaoId = this.dataset.solicitacaoId;
        // Lógica de aprovação (chamar API, banco de dados, etc.)
        alert('Solicitação ' + solicitacaoId + ' aprovada.');
    });
});

document.querySelectorAll('.rejeitarSolicitacao').forEach(function(button) {
    button.addEventListener('click', function() {
        var solicitacaoId = this.dataset.solicitacaoId;
        // Lógica de rejeição (chamar API, banco de dados, etc.)
        alert('Solicitação ' + solicitacaoId + ' rejeitada.');
    });
});
