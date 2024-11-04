let numeros = [];

function adicionarNumero() {
    const numeroInput = document.getElementById('numero');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        numeros.push(numero);
        numeroInput.value = '';
    } else {
        alert('Por favor, digite um número válido.');
    }
}

function calcularEstatisticas() {
    const resultadoElement = document.getElementById('resultado');

    if (numeros.length === 0) {
        resultadoElement.textContent = 'Nenhum número foi inserido.';
        return;
    }

    let soma = 0;
    let pares = 0;
    let impares = 0;

    numeros.forEach(numero => {
        soma += numero;
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    });

    const media = soma / numeros.length;

    resultadoElement.textContent = `
        Soma: ${soma}
        Média: ${media.toFixed(2)}
        Pares: ${pares}
        Ímpares: ${impares}
    `;
}