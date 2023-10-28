function checkType() {
    const inputValue = document.getElementById('inputValue').value;
    const resultElement = document.getElementById('result');

    if (!inputValue) {
        resultElement.textContent = 'Por favor, ingrese un valor';
        return;
    }

    if (!isNaN(inputValue)) {
        resultElement.textContent = 'Número';
    } else {
        resultElement.textContent = 'Texto';
    }
}
