document.addEventListener('DOMContentLoaded', function () {
    const auditTable = document.getElementById('auditTable').getElementsByTagName('tbody')[0];
    
    // Exemplo de dados fictícios de auditoria
    const auditLog = [
        { user: 'Admin', action: 'Cadastrou espaço', date: '12/10/2024', details: 'Sala 101 cadastrada' },
        { user: 'Gestor', action: 'Aprovou solicitação', date: '13/10/2024', details: 'Solicitação da Prof. Maria' },
    ];
    
    // Exibir o log de auditoria na tabela
    auditLog.forEach(log => {
        const row = auditTable.insertRow();
        row.insertCell(0).innerText = log.user;
        row.insertCell(1).innerText = log.action;
        row.insertCell(2).innerText = log.date;
        row.insertCell(3).innerText = log.details; // Agora com a coluna Detalhes
    });
});
