document.addEventListener('DOMContentLoaded', function () {
    const reservationsTable = document.getElementById('reservationsTable');
    
    // Exemplo de dados fictícios
    const reservations = [
        { space: 'Sala 101', date: '12/10/2024', time: '14:00 - 16:00', reservedBy: 'Prof. João' },
        { space: 'Auditório', date: '13/10/2024', time: '10:00 - 12:00', reservedBy: 'Prof. Maria' },
    ];
    
    // Exibir as reservas na tabela
    reservations.forEach(reservation => {
        const row = reservationsTable.insertRow();
        row.insertCell(0).innerText = reservation.space;
        row.insertCell(1).innerText = reservation.date;
        row.insertCell(2).innerText = reservation.time;
        row.insertCell(3).innerText = reservation.reservedBy;
    });
});
