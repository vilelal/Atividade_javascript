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

function mostrarTodos() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Números inseridos: ${numeros.join(', ')}`;
}

function mostrarMaiorMenor() {
    const resultado = document.getElementById('resultado');
    if (numeros.length === 0) {
        resultado.textContent = 'Nenhum número foi inserido.';
    } else {
        const maior = Math.max(...numeros);
        const menor = Math.min(...numeros);
        resultado.textContent = `Maior número: ${maior}, Menor número: ${menor}`;
    }
}