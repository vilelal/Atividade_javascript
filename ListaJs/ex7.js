function verificarPredominancia() {
    const metalPercent = parseFloat(document.getElementById('metal').value);
    const ametalPercent = parseFloat(document.getElementById('ametal').value);
    const resultadoElement = document.getElementById('resultado');

    // Verifica se a soma dos percentuais é 100%
    if (metalPercent + ametalPercent !== 100) {
        resultadoElement.textContent = "A soma dos percentuais deve ser 100%";
        return;
    }

    // Verifica a predominância
    if (metalPercent > ametalPercent) {
        resultadoElement.textContent = "A liga é predominantemente metálica.";
    } else if (metalPercent < ametalPercent) {
        resultadoElement.textContent = "A liga é predominantemente ametálica.";
    } else {
        resultadoElement.textContent = "A liga possui quantidades iguais de metal e ametal.";
    }
}