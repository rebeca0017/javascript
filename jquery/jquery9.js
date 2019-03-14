var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //obtenemos la referencia del objeto document y le registramos la función a ejecutar cuando se desplace el mouse
    var x;
    x = $(document);
    x.mousemove(moverMouse);
}

function moverMouse(event) {//se ejecuta cada vez que se desplaza la flecha del mouse 
    var x;
    //creamos un objeto jQuery a partir del id del primer párrafo y fijamos el texto del mismo con el valor 
    //del atributo event.clientX que almacena la coordenada x de la flecha del mouse
    x = $("#corx");
    x.text("coordenada x=" + event.clientX);
    x = $("#cory");
    x.text("coordenada y=" + event.clientY);
}