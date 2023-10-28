document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ageForm");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const resultMessage = document.getElementById("result");
    const checkButton = document.getElementById("checkButton");

    checkButton.addEventListener("click", function () {
        const name = nameInput.value;
        const age = parseInt(ageInput.value);

        if (isNaN(age) || age < 0) {
            resultMessage.textContent = "No es una edad válida.";
        } else if (age >= 18) {
            resultMessage.textContent = `Hola ${name}, eres mayor de edad.`;
        } else {
            resultMessage.textContent = `Hola ${name}, no eres mayor de edad.`;
        }
    });
});
