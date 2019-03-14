
var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    //asignar las funciones a ejecutarse cuando ocurren los evento mouseover y mouseout
    var x;
    x = $("a");
    x.mouseover(entraMouse);
    x.mouseout(saleMouse);
}


function entraMouse() {//accede al elemento que recibe en su interior el mouse (la obtenemos mediante la referencia que guarda this) 
    //y cambia el color de la propiedad text-background del CSS:
    $(this).css("background-color", "#ff0");
}

function saleMouse() {//retorna al color original
    $(this).css("background-color", "#fff");
}