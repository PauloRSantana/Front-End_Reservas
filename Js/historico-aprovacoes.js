document.addEventListener('DOMContentLoaded', function () {
    const historyTable = document.getElementById('historyTable').getElementsByTagName('tbody')[0]; // Obter o tbody da tabela
    
    // Exemplo de dados fictícios de histórico
    const history = [
        { applicant: 'João Silva', space: 'Sala 101', status: 'Aprovada', date: '12/10/2024', time: '10:00', approvedBy: 'Gestor Carlos' },
        { applicant: 'Ana Santos', space: 'Auditório', status: 'Rejeitada', date: '13/10/2024', time: '11:00', approvedBy: 'Gestor Ana' },
    ];
    
    // Exibir o histórico na tabela
    history.forEach(entry => {
        const row = historyTable.insertRow();
        row.insertCell(0).innerText = entry.applicant; // Adicionando solicitante
        row.insertCell(1).innerText = entry.space;    // Adicionando espaço
        row.insertCell(2).innerText = entry.date;     // Adicionando data
        row.insertCell(3).innerText = entry.time;     // Adicionando horário
        row.insertCell(4).innerText = entry.status;    // Adicionando status
        row.insertCell(5).innerText = entry.approvedBy; // Adicionando gestor
    });
});
