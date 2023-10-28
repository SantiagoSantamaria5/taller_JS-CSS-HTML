document.getElementById('aceptar').addEventListener('click', countCharacters);

function countCharacters() {
    var inputText = document.getElementById('inputText').value;
    var result = document.getElementById('result');
    result.textContent = 'Caracteres totales: ' + inputText.length;
}