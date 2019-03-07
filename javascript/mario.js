var numeroMaximo = 20;
var numerosPrimos = [];
var finocachi = []
var numeroAntiguo = 0;
var numeroNuevo = 1;
var resultado;
var a
 
for (var i = 3 ; i <= numeroMaximo; i++) {

    resultado = numeroAntiguo + numeroNuevo;
    numeroAntiguo = numeroNuevo;
    numeroNuevo = resultado;
    //console.log(resultado)
    finocachi.push(resultado)
} 


for (var j = 2; j < numeroMaximo; j++) {

    if (primo(j)) {
        numerosPrimos.push(j*a); 
    }
}

function primo(numeroMaximo) {
    for (var i = 2; i < numeroMaximo; i++) {

        if (numeroMaximo % i === 0) {
           
            return false;
        }
    }

    return i !== 1;
}

numerosPrimos.forEach(function (element) {
    console.log(element);
});
finocachi.forEach(function (element) {
    a = element
    //console.log(a); 
})
