// Função para aplicar a máscara no número do cartão
function mascaraCartao(valor) {
    return valor
        .replace(/\D/g, "") // Remove qualquer caractere que não seja número
        .replace(/(\d{4})(?=\d)/g, "$1 ") // Adiciona um espaço a cada 4 dígitos
        .trim(); // Remove qualquer espaço adicional no final
}

// Função para aplicar a máscara na data de validade (MM/AA)
function mascaraData(valor) {
    return valor
        .replace(/\D/g, "") // Remove qualquer caractere que não seja número
        .replace(/(\d{2})(\d)/, "$1/$2") // Adiciona a barra após os primeiros 2 dígitos
        .slice(0, 5); // Limita a entrada a 5 caracteres (MM/AA)
}

// Espera o DOM ser completamente carregado antes de adicionar os eventos
document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("cardNumber");
    const cardExpiryInput = document.getElementById("cardExpiry");

    // Aplica a máscara enquanto o usuário digita o número do cartão
    if (cardNumberInput) {
        cardNumberInput.addEventListener("input", function () {
            this.value = mascaraCartao(this.value);
        });
    }

    // Aplica a máscara enquanto o usuário digita a data de validade
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener("input", function () {
            this.value = mascaraData(this.value);
        });
    }

    const paymentForm = document.getElementById("paymentForm");

    // Exibe um alerta quando o formulário é enviado com sucesso
    if (paymentForm) {
        paymentForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Impede o envio real para fins de demonstração
            alert("Pagamento realizado com sucesso!");
        });
    }
});
