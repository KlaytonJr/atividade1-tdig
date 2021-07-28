let resposta = document.querySelector('.resposta');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let string = document.querySelector('.txt').value;
    string = string.split(',');
    somar(string)
});



function somar(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if(Number.isInteger(parseInt(array[i])) && parseInt(array[i]) % 2 !== 0 && parseInt(array[i]) % 3 === 0 ) {
            soma += parseInt(array[i]);
        }
    }

    resposta.innerHTML = soma;
}