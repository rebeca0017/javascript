var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#boton1");
    x.click(ocultarRecuadro);
    x = $("#boton2");
    x.click(mostrarRecuadro);
}

function ocultarRecuadro() {//La función ocultarRecuadro se ejecuta cuando presionamos el botón de "Ocultar recuadro"
// donde obtenemos la referencia del div mediante su id y procedemos a llamar al método hide pasándole el string "slow", 
//con esto logramos que se oculte el recuadro lentamente
    var x = $("#descripcion");
    x.hide("slow");
}

function mostrarRecuadro() {
    var x = $("#descripcion");
    x.show("slow");//llama a la función show pasando como parámetro el string "fast"
}