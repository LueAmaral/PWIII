// Função para buscar endereço pelo CEP
function buscaCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length === 8) {
        $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data) {
            if (!("erro" in data)) {
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            } else {
                alert("CEP não encontrado.");
            }
        });
    } else {
        alert("Formato de CEP inválido.");
    }
}

// Máscara para o CEP
function mascaraCEP(cep) {
    return cep.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
}
