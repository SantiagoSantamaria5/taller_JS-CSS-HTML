function calcularPromedio() {
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const materia = document.getElementById("materia").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcular el promedio
    const promedio = (nota1 + nota2 + nota3) / 3;

    // Determinar si el usuario pasó o perdió la materia
    if (promedio >= 3.0) {
        mostrarResultado(`Felicitaciones ${nombre}, su nota es ${promedio.toFixed(2)}, Pasaste la materia ${materia}.`, "green");
    } else {
        mostrarResultado(`Lo siento ${nombre}, su nota es ${promedio.toFixed(2)}, No pasaste la materia ${materia}.`, "red");
    }
}

function mostrarResultado(mensaje, color) {
    const result = document.getElementById("result");
    result.textContent = mensaje;
    result.style.color = color;
}