function analisar() {
    const numerosInput = document.getElementById('numeros');
    const resultadoElement = document.getElementById('resultado');

    // Obtém os números do input e separa em um array
    const numerosString = numerosInput.value;
    const numerosArray = numerosString.split(',').map(Number);

    // Calcula a média
    const media = numerosArray.reduce((acc, num) => acc + num, 0) / numerosArray.length;

    // Filtra os números maiores que a média
    const maioresQueMedia = numerosArray.filter(num => num > media);

    // Conta os números menores que zero
    const menoresQueZero = numerosArray.filter(num => num < 0).length;

    // Exibe os resultados
    resultadoElement.textContent = `
        Números maiores que a média (${media.toFixed(2)}): ${maioresQueMedia.join(', ')}
        Número de elementos menores que zero: ${menoresQueZero}
    `;
}