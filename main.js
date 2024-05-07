function mostrarContenedor(idContenedor) {
    // Obtener todos los contenedores
    var contenedores = document.getElementsByClassName('contenedor_graficas');
    
    // Ocultar todos los contenedores
    for (var i = 0; i < contenedores.length; i++) {
        contenedores[i].classList.add('oculto');
    }
    
    // Mostrar el contenedor seleccionado
    var contenedorSeleccionado = document.getElementById(idContenedor);
    contenedorSeleccionado.classList.remove('oculto');
}

function mostrarDivs(claseMostrar) {
    // Ocultar todos los elementos con clase "Velez" y "Ecommerce"
    var kpisElements = document.querySelectorAll('.kpis');
    for (var i = 0; i < kpisElements.length; i++) {
        kpisElements[i].classList.add('oculto');
    }
    
    // Mostrar los elementos con la clase especificada
    var divsAMostrar = document.querySelectorAll('.kpis.' + claseMostrar);
    for (var i = 0; i < divsAMostrar.length; i++) {
        divsAMostrar[i].classList.remove('oculto');
    }
}
