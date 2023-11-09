function verificarDivisibilidad() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');

    if (Number.isInteger(number1) && number1 > 0 && Number.isInteger(number2) && number2 > 0) {
        if (number1 % number2 === 0) {
            resultElement.textContent = `El número ${number1} es divisible entre el número ${number2}.`;
        } else {
            resultElement.textContent = `El número ${number1} no es divisible entre el número ${number2}.`;
        }
    } else {
        resultElement.textContent = 'Por favor, ingrese dos números enteros positivos.';
    }
}