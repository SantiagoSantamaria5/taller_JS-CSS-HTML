//<meta charset="UTF-8"></meta>
function identificarNumero() {
    const inputNumero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const numero = parseFloat(inputNumero.value);

    if (Number.isInteger(numero) && numero > 0) {
        if (numero % 2 === 0) {
            resultado.textContent = "Par";
        } else {
            resultado.textContent = "Impar";
        }
    } else if (!Number.isInteger(numero)) {
        resultado.textContent = "Debe ingresar números enteros, no caracteres o numero decimales.";
    } else if (numero <= 0) {
        resultado.textContent = "Debe ingresar números enteros positivos, no negativos.";
    }
}