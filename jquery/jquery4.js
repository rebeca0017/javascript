var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#boton1");
  x.click(asociarClase);
  x=$("#boton2");
  x.click(desasociarClase);
}

function asociarClase()//Cuando se presiona el botón asociar hoja de estilo se ejecuta la función llamamos al método addClass con el nombre de la clase 
 //llamamos al método addClass con el nombre de la clase (dicha clase debe estar definida en la hoja de estilo (css)).
 //(dicha clase debe estar definida en la hoja de estilo (css)).
{
  var x=$("#descripcion");
  x.addClass("recuadro");
}

function desasociarClase()//para desasociar una clase se ejecuta la función donde llamamos al método removeClass a partir de un objeto jQuery.
{
  var x=$("#descripcion");
  x.removeClass("recuadro");
}