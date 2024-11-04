function converter() {
    // Obtém os valores do formulário
    const temperaturaInput = document.getElementById('temperatura');
    const escalaInput = document.getElementById('escala');
    const resultadoElement = document.getElementById('resultado');

    // Converte os valores para números
    const temperatura = parseFloat(temperaturaInput.value);
    const escala = escalaInput.value;

    let resultado;

    // Realiza a conversão de acordo com a escala escolhida
    if (escala === 'celsius') {
        resultado = (temperatura * 9/5) + 32;
        resultadoElement.textContent = `${temperatura}°C equivale a ${resultado.toFixed(2)}°F`;
    } else {
        resultado = (temperatura - 32) * 5/9;
        resultadoElement.textContent = `${temperatura}°F equivale a ${resultado.toFixed(2)}°C`;
    }
}