let list = document.querySelector('.list');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    list.innerHTML = '';
    let string = document.querySelector('.txt').value;
    string = string.split(',');
    fatorar(string)
});



function fatorar(array) {
    for (let i = 0; i < array.length; i++) {
        if(Number.isInteger(parseInt(array[i]))) {
            let resultado = parseInt(array[i]);
            for (let j = 1; j < parseInt(array[i]); j++) {
                resultado *= j;
            }

            let element = document.createElement('li');
            element.innerHTML = `O fatorial de ${parseInt(array[i])} é ${resultado}`;
            list.appendChild(element);
        }
    }
}