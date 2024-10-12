document.addEventListener('DOMContentLoaded', function () {
    const historyTable = document.getElementById('historyTable');
    
    // Exemplo de dados fictícios de histórico
    const history = [
        { space: 'Sala 101', status: 'Aprovada', date: '12/10/2024', approvedBy: 'Gestor Carlos' },
        { space: 'Auditório', status: 'Rejeitada', date: '13/10/2024', approvedBy: 'Gestor Ana' },
    ];
    
    // Exibir o histórico na tabela
    history.forEach(entry => {
        const row = historyTable.insertRow();
        row.insertCell(0).innerText = entry.space;
        row.insertCell(1).innerText = entry.status;
        row.insertCell(2).innerText = entry.date;
        row.insertCell(3).innerText = entry.approvedBy;
    });
});
