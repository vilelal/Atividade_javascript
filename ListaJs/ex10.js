function calcularExponencial() {
    const valorX = parseFloat(document.getElementById('valorX').value);
    const resultado = Math.exp(valorX);

    document.getElementById('resultado').textContent = `e^${valorX} = ${resultado.toFixed(2)}`;
}