





var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#boton1");
    x.click(extraerTexto);
    x = $("#boton2");
    x.click(modificarTexto);
    x = $("#boton3");
    x.click(modificarDatosTabla);
}

function extraerTexto() {//se dispara al presionar el primer botón Obtenemos la referencia al párrafo mediante su id 
    //luego extraemos el contenido mediante el método text() y lo mostramos en un alert.
    var x = $("#parrafo1");
    alert(x.text());
}

function modificarTexto() {//cambia contenido del parrafo  Obtenemos la referencia del párrafo mediante su id y 
    //llamamos al método text enviándole el nuevo string a mostrar.
    var x = $("#parrafo1");
    x.text("Nuevo texto del párrafo");
}

function modificarDatosTabla() {//Crea un objeto de la clase jQuery con la 
    //referencia a todos los elementos td del documento (es decir los td de todas las tablas) 
    //y posteriormente mediante el método text modifica el contenido de todos ellos
    // (todos los td del documento se cambian por el string "nuevo texto")
    var x = $("td");
    x.text("texto nuevo");
}