var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    var x = $("#boton1");
    x.click(ocultarMostrarRecuadro);
}

function ocultarMostrarRecuadro() {
    var x = $("#descripcion");
    x.toggle("slow");//e encarga de llamar al método toggle del objeto jQuery, y este analiza si actualmente el elemento está visible u oculto, 
    //la transición se hace en forma lenta ya que le pasamos como parámetro el string "slow".
}