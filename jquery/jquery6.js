var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x;
    x = $("p");
    x.click(presionParrafoDocumento);// asocia a cada elemento de tipo "p" (párrafo del documento) la función 'presionParrafoDocumento':
    x = $("#tabla2 p");
    x.click(presionpresionParrafoSegundaTabla);//asociamos otra función para el evento click de los párrafos contenidos dentro de la segunda tabla:
}

function presionParrafoDocumento() {
    alert('se presionó un párrafo del documento');
}

function presionpresionParrafoSegundaTabla() {
    alert('se presionó un párrafo contenido en la segunda tabla.');
}