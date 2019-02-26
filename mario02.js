var numeroAntiguo = 0;
var numeroNuevo = 1;
var resultado;

function aver(numero) {
    console.log(numeroAntiguo + "");
    console.log(numeroNuevo + "");

    for (var i = 3; i <= numero; i++) {
        resultado = numeroAntiguo + numeroNuevo;
        numeroAntiguo = numeroNuevo;
        numeroNuevo = resultado;
        console.log(resultado + "");
    }

}

aver(12)
