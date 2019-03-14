var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#boton1");
    x.click(agregarPropiedadBorder);
    x = $("#boton2");
    x.click(recuperarPropiedadBorder);
    x = $("#boton3");
    x.click(eliminarPropiedadBorder);
}

function agregarPropiedadBorder() { //se ejecuta al presionar el primer boton. Obtenemos la referencia de la tabla mediante su id y 
    //llamamos al método attr pasando como primer parámetro el nombre de la propiedad a 
    //agregar y como segundo parámetro el valor de la propiedad.
    var x = $("#tabla1");
    x.attr("border", "1");
}

function recuperarPropiedadBorder() {//al presionar el segundo boton, Llamamos al método attr enviándole como parámetro el nombre de la propiedad 
    //que queremos rescatar. Si retorna el valor undefined significa que no tiene dicha propiedad el elemento HTML, 
    //en caso contrario retorna su valor y procedemos a mostrarlo mediante un alert.
    var x = $("#tabla1");
    if (x.attr("border") != undefined)
        alert(x.attr("border"));
    else
        alert("No está definida la propiedad border en la tabla");
}

function eliminarPropiedadBorder() { // al presionar el tercer boton, Obtenemos la referencia a la tabla mediante su id y 
    //llamamos al método removeAttr con el nombre de la propiedad a eliminar.
    var x = $("#tabla1");
    x.removeAttr("border");
}