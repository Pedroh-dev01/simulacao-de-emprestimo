function calcularResultados() {
    const valor = parseFloat(document.getElementById('valor').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tempo = parseFloat(document.getElementById('tempo').value);

    if (isNaN(valor) || isNaN(taxa) || isNaN(tempo) || tempo <= 0) {
        return;
    }

    const taxaMensal = taxa / 100 / 12;
    const x = Math.pow(1 + taxaMensal, tempo);
    const pagamentoMensal = (valor * x * taxaMensal) / (x - 1);

    const valorTotal = pagamentoMensal * tempo;
    const jurosTotais = valorTotal - valor;

    document.getElementById('pagamento-mensal').innerText = pagamentoMensal.toFixed(2);
    document.getElementById('valor-total').innerText = valorTotal.toFixed(2);
    document.getElementById('taxa-total').innerText = jurosTotais.toFixed(2);
}

document.getElementById('valor').addEventListener('input', calcularResultados);
document.getElementById('taxa').addEventListener('input', function() {
    document.getElementById('taxa-valor').innerText = this.value + '%';
    calcularResultados();
});
document.getElementById('tempo').addEventListener('input', calcularResultados);
