
$(document).ready(inicializarEventos);
function inicializarEventos() {
    $("#titulo1").click(presionTitulo1)
    $("#titulo2").click(presionTitulo2)
}

function presionTitulo1() {
    var x;
    x = $("#titulo1");
    x.css("color", "#ff0000");
    x.css("background-color", "#ffff00");
    x.css("font-family", "Courier");
}

function presionTitulo2() {
    var x;
    x = $("#titulo2");
    x.css("color", "#ffff00");
    x.css("background-color", "#ff0000");
    x.css("font-family", "Arial");
}