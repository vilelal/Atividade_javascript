function calcularCusto() {
    // Obtém os valores dos inputs
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);

    // Calcula a área do cômodo
    const area = comprimento * largura;

    // Calcula o custo total
    const custoPorMetroQuadrado = 36; // Preço por metro quadrado
    const custoTotal = area * custoPorMetroQuadrado;

    // Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `O custo total para assentar o piso é de R$ ${custoTotal.toFixed(2)}`;
}