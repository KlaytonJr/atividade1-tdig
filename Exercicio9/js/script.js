let resposta = document.querySelector('.resposta');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let string = document.querySelector('.txt').value;
    string = string.split(',');
    fatorar(string)
});



function fatorar(array) {
    let media = 0;
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let posPercent = 0;
    let negPercent = 0;
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        if(Number.isInteger(parseInt(array[i]))) {
            total++;
            soma += parseInt(array[i]);
            if (parseInt(array[i]) >= 0) {
                positivos++;
            } else {
                negativos++;
            }
        }
    }

    media = soma / total;

    posPercent = (positivos / total) * 100;
    negPercent = (negativos / total) * 100;

    resposta.innerHTML = `A média é ${media.toFixed(2)}</br>`;
    resposta.innerHTML += `Na lista tem ${positivos} números positivos</br>`;
    resposta.innerHTML += `Na lista tem ${negativos} números negativos</br>`;
    resposta.innerHTML += `${posPercent.toFixed(2)}% são números positivos</br>`;
    resposta.innerHTML += `${negPercent.toFixed(2)}% são números negativos</br>`;
}