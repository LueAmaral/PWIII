// Função para aplicar máscara ao telefone
function mascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); // Remove tudo que não é dígito
    telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses no DDD
    telefone = telefone.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen no número
    return telefone;
}

// Função para aplicar máscara ao CPF
function mascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca ponto entre os blocos de números
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca ponto entre os blocos de números
    cpf = cpf.replace(/(\d{3})(\d{2})$/, "$1-$2"); // Coloca hífen antes dos últimos 2 dígitos
    return cpf;
}
