function calcularIonica() {
    const metalEletrons = parseInt(document.getElementById('metalEletrons').value);
    const ametalEletrons = parseInt(document.getElementById('ametalEletrons').value);

    const resultado = document.getElementById('resultadoIonica');

    // Encontra o mínimo múltiplo comum (MMC) para determinar a proporção
    let a = metalEletrons;
    let b = ametalEletrons;
    while (b != 0) {
        let temp = a;
        a = b;
        b = temp % b;
    }
    const mmc = (metalEletrons * ametalEletrons) / a;

    const indiceMetal = mmc / metalEletrons;
    const indiceAmetal = mmc / ametalEletrons;

    resultado.textContent = `Fórmula iônica: M${indiceMetal}X${indiceAmetal}`;
}

function calcularCovalente() {
    const ligacoes1 = parseInt(document.getElementById('elemento1Ligacoes').value);
    const ligacoes2 = parseInt(document.getElementById('elemento2Ligacoes').value);

    const resultado = document.getElementById('resultadoCovalente');

    // Encontra o mínimo múltiplo comum (MMC) para determinar a proporção
    let a = ligacoes1;
    let b = ligacoes2;
    while (b != 0) {
        let temp = a;
        a = b;
        b = temp % b;
    }
    const mmc = (ligacoes1 * ligacoes2) / a;

    const indice1 = mmc / ligacoes1;
    const indice2 = mmc / ligacoes2;

    resultado.textContent = `Fórmula molecular: A${indice1}B${indice2}`;
}