var numeroMaximo = 20;
var numerosPrimos = [];
var finocachi = []
var numeroAntiguo = 0;
var numeroNuevo = 1;
var resultado;
var i ;


for (var j = 2; j < numeroMaximo; j++) {

    if (primo(j)) {
        numerosPrimos.push(j*i);
    }
}

function primo(numeroMaximo) {
    for (var i = 2; i < numeroMaximo; i++) {

        if (numeroMaximo % i === 0) {
            return false;
        }
    }
    for (var i = 3; i <= numeroMaximo; i++) {

        resultado = numeroAntiguo + numeroNuevo;
        numeroAntiguo = numeroNuevo;
        numeroNuevo = resultado;
        //console.log(resultado)
        finocachi.push(resultado)
    }
   
    
    return numeroMaximo !== 1;
}



numerosPrimos.forEach(function(element) {
    
  console.log(element);
});


  
