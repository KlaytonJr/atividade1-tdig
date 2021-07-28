let resposta = document.querySelector('.resposta');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let string = document.querySelector('.txt').value;
    string = string.split(',');
    ordenar(string)
});



function ordenar(array) {
    let onlyNumbers = [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if(Number.isInteger(parseInt(array[i]))) {
            onlyNumbers[index] = parseInt(array[i])
            index++;
        }
    }

    onlyNumbers = onlyNumbers.sort((a,b) => a - b);

    resposta.innerHTML = JSON.stringify(onlyNumbers);
}