var x;
x = $(document);
x.ready(inicializarEventos);

//En la función inicializarEventos obtenemos la lista de párrafos contenidas en el div y luego a este objeto jQuery
// mediante el método each indicamos el nombre de la función que procesará a cada elemento:
function inicializarEventos() {
    var x;
    x = $("#parrafos p");
    x.each(resaltarParrafos);
}
//Lo primero que hacemos mediante la función $ es obtener la referencia del objeto a procesar.
// Accedemos al método text() que nos retorna el texto del párrafo propiamente dicho.
//El método text() retorna un string por lo que podemos acceder al atributo length y verificar
// la cantidad de caracteres que tiene, en caso de ser inferior a 100 procedemos a cambiar el color de fondo de 
//dicho párrafo
function resaltarParrafos() {
    var x = $(this);
    if (x.text().length < 100) {
        x.css("background-color", "#ff0");
    }
}