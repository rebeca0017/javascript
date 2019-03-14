var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#boton1");
    x.click(reducirOpacidadRecuadro);
    x = $("#boton2");
    x.click(aumentarOpacidadRecuadro);
}

function reducirOpacidadRecuadro() {
    var x = $("#descripcion");
    x.fadeTo("slow", 0.5);//Cuando se presiona el botón de reducir la opacidad llamamos al método fadeTo con el valor 0.5:
}

function aumentarOpacidadRecuadro() {
    var x = $("#descripcion");
    x.fadeTo("slow", 1);//y cuando presionamos el botón de aumentar la opacidad llamamos al método fadeTo con valor 1 en 
    //opacidad (significa opacidad total):
}