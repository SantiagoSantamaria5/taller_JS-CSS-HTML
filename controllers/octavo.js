
function identificarNumeros() {
    const numberList = document.getElementById('numberList').value;
    const numbers = numberList.split(',').map(num => num.trim());
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    numbers.forEach(number => {
        const parsedNumber = parseFloat(number);

        if (Number.isInteger(parsedNumber)) {
            if (parsedNumber % 2 === 0) {
                resultElement.innerHTML += `<p>${parsedNumber} es número par</p>`;
            } else {
                resultElement.innerHTML += `<p>${parsedNumber} es número impar</p>`;
            }
        } else {
            resultElement.innerHTML += `<p>${number} no es un número entero</p>`;
        }
    });
}