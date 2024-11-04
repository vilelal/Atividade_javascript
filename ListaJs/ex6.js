function calcularForcaResultante() {
    const massa = parseFloat(document.getElementById('massa1').value);
    const aceleracao1 = parseFloat(document.getElementById('aceleracao1').value);
    const aceleracao2 = parseFloat(document.getElementById('aceleracao2').value);

    const aceleracaoResultante = aceleracao1 - aceleracao2;
    const forcaResultante = massa * aceleracaoResultante;

    document.getElementById('resultado1').textContent = `A força resultante é: ${forcaResultante} N`;
}

function calcularForcaAcaoReacao() {
    const massa1 = parseFloat(document.getElementById('massa2').value);
    const aceleracao1 = parseFloat(document.getElementById('aceleracao3').value);
    const massa2 = parseFloat(document.getElementById('massa3').value);
    const aceleracao2 = parseFloat(document.getElementById('aceleracao4').value);

    const forcaAcao = massa1 * aceleracao1;
    const forcaReacao = -forcaAcao; 

    document.getElementById('resultado2').textContent = `A força de ação é: ${forcaAcao} N. A força de reação é: ${forcaReacao} N.`;
}