var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#boton1");
    x.click(ocultarRecuadro);
    x = $("#boton2");
    x.click(mostrarRecuadro);
}

function ocultarRecuadro() {
    var x = $("#descripcion");
    x.fadeOut("slow");// llamar al método fadeOut pasándole
    // el string "slow", con esto logramos que se oculte el recuadro se decolore lentamente hasta desaparecer.
}

function mostrarRecuadro() {
    var x = $("#descripcion");
    x.fadeIn("slow");
}