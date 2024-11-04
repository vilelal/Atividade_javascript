function calcularGasto() {
    // Obtém os valores dos inputs
    const quilometragem = parseFloat(document.getElementById('quilometragem').value);
    const valorCombustivel = parseFloat(document.getElementById('valorCombustivel').value);   


    // Calcula o consumo de combustível (em litros)
    const consumo = quilometragem / 8;

    // Calcula o gasto total
    const gastoTotal = consumo * valorCombustivel;

    // Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `O gasto total com combustível foi de R$ ${gastoTotal.toFixed(2)}`;
}