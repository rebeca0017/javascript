var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x;
    x = $("#boton1");
    x.click(eliminarElementos)
    x = $("#boton2");
    x.click(restaurarLista)
    x = $("#boton3");
    x.click(anadirElementoFinal)
    x = $("#boton4");
    x.click(anadirElementoPrincipio)
    x = $("#boton5");
    x.click(eliminarElementoFinal)
    x = $("#boton6");
    x.click(eliminarElementoPrincipio)
    x = $("#boton7");
    x.click(eliminarPrimeroSegundo)
    x = $("#boton8");
    x.click(eliminarDosUltimos)
}

function eliminarElementos() {//Para borrar todos los elementos contenidos en 
    //una lista obtenemos la referencia de la lista mediante la función $ y seguidamente 
    //llamamos al método empty
    var x;
    x = $("ul").empty();
}

function restaurarLista() {//Para restaurar la lista utilizamos el método html insertando directamente los item a partir del elemento ul
    $("ul").html('<li>Primer item.</li><li>Segundo item.</li > <li>Tercer item.</li> <li>Cuarto item.</li>');
}

function anadirElementoFinal() {//Para añadir un elemento al final de la colección de elementos del objeto jQuery disponemos del método append
    var x;
    x = $("ul");
    x.append("<li>otro item al final</li>");
}

function anadirElementoPrincipio() {//Para añadir un elemento al principio disponemos de un método llamado prepend
    var x;
    x = $("ul");
    x.prepend("<li>otro item al principio</li>");
}
//Para eliminar un elemento del final de la lista, primero obtenemos la cantidad de elementos que almacena el objeto jQuery por medio de la
// propiedad length y luego mediante el método eq (equal) indicamos la posición del elemento que necesitamos (el método eq retorna otro 
//objeto de tipo jQuery) y por último llamamos al método remove
function eliminarElementoFinal() {
    var x;
    x = $("li");
    var cantidad = x.length;
    x = x.eq(cantidad - 1);
    x.remove();
}
//aquí no necesitamos saber la cantidad de elementos que almacena el objeto jQuery ya que debemos acceder al primero (el primero se almacena en la posición cero)
function eliminarElementoPrincipio() { //
    var x;
    x = $("li");
    x = x.eq(0);
    x.remove();
}
// lt (low than) que retorna todos los elementos menores a la posición que le pasamos como parámetro (en nuestro ejemplo nos retorna los elementos de la posición 0 y 1
function eliminarPrimeroSegundo() {
    var x;
    x = $("li:lt(2)")
    x.remove();
}
//gt (great than) que retorna un objeto jQuery con todos los elementos que superan la posición que le indicamos en el parámetro:
function eliminarDosUltimos() {
    var x;
    x = $("li");
    x=$("li:gt(x.length-3)");
    x.remove();
}