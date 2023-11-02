function checkNumber() {
    const inputElement = document.getElementById("numberInput");
    const resultElement = document.getElementById("resultMessage");
  
    const inputNumber = parseInt(inputElement.value);
  
    if (isNaN(inputNumber) || !Number.isInteger(inputNumber) || inputNumber <= 0) {
      resultElement.textContent = "Debe ingresar números enteros positivos.";
    } else if (inputNumber % 2 === 0) {
      resultElement.textContent = "Par";
    } else {
      resultElement.textContent = "Impar";
    }
  }
  