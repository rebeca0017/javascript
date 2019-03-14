var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x;
    x = $("a");
    x.hover(entraMouse, saleMouse);//evento hover para cambiar el color de fondo del ancla cuando se 
    //ingresa la flecha del mouse y retornarla al color original cuando se sale:
}


function entraMouse() {
    $(this).css("background-color", "#ff0");
}

function saleMouse() {
    $(this).css("background-color", "#fff");
}