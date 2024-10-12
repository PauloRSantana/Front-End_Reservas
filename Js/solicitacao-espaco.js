document.getElementById('solicitacaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const tipoEspaco = document.getElementById('tipoEspaco').value;
    const dataSolicitacao = document.getElementById('dataSolicitacao').value;
    const horarioSolicitacao = document.getElementById('horarioSolicitacao').value;

    // Exibir os dados da solicitação
    const respostaDiv = document.getElementById('respostas');
    respostaDiv.innerHTML += `<p>Solicitação para ${tipoEspaco} em ${dataSolicitacao} às ${horarioSolicitacao} enviada com sucesso!</p>`;
});
