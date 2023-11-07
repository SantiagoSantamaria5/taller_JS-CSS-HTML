function buscarTexto() {
    var searchText = document.getElementById("searchText").value;
    var paragraph = document.getElementById("paragraph").value;
    var resultContainer = document.getElementById("result");

    // Crear una expresión regular con la cadena de búsqueda y la opción 'gi' para buscar de forma insensible a mayúsculas y minúsculas.
    var regex = new RegExp(searchText, "gi");

    // Usar replace con una función de reemplazo para resaltar las coincidencias encontradas en el párrafo.
    var resultado = paragraph.replace(regex, function (match) {
        return "<span style='background-color: yellow;'>" + match + "</span>";
    });

    // Mostrar el resultado en el contenedor.
    resultContainer.innerHTML = resultado;
}
