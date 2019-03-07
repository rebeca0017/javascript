//ejercicio 1
var x = 1;
var notasMe = 0;
var notasMa = 0;
while (x <= 10) {
    var valor = parseInt(prompt('ingrese su nota:'));

    if (valor >= 7) {
        notasMa = notasMa + 1
    }
    if (valor < 7) {
        notasMe = notasMe + 1
    }
    x = x + 1;
}
document.write('notas mayores a 7 son', notasMa);
document.write('<br>');
document.write('notas menores a 7 son', notasMe);

//ejercicio2
var x = 1;
var altura = 0;
while (x <= 5) {
    var ingresar = parseInt(prompt('ingrese su altura'));
    altura = altura + ingresar;
    var alturaP = altura / 5;
    x = x + 1;
}
document.write('la altura promedio de la personas es: ', alturaP);

//ejercicio3

var x = 1;
var sueldosMenos = 0;
var sueldosMas = 0;
var gasto = 0;
while (x <= 5) {
    var sueldos = parseInt(prompt('ingrese su sueldo: '));
    if (sueldos >= 100 && sueldos < 300) {
        sueldosMenos = sueldosMenos + 1;
    }
    if (sueldos >= 300) {
        sueldosMas = sueldosMas + 1;
    }
    gasto = gasto + sueldos
    x = x + 1
}
document.write('la cantidad de empleados que cobran entre 100 y 300 dolares son :', sueldosMenos);
document.write('<br>');

document.write('la cantidad de empleados que cobran mas de 300 dolares son :', sueldosMas);
document.write('<br>');

document.write('el gasto que tiene la empresa es de:', gasto);


//ejercicio 4

var x = 0;
var serie = 0

while (x <= 20) {
    serie = serie + 5;
    x = x + 1;
    document.write(serie);
    document.write('<br>');

}

//ejercicio 5
var x = 0;
var lista1 = 0;

while (x < 3) {
    var num = parseInt(prompt('ingrese el valor de la primera lista'));
    lista1 = lista1 + num;
    x += 1;
}
document.write('lista 1');
document.write('<br>');
document.write(lista1);
document.write('<br>');



var x = 0;
var lista2 = 0;
var numeros = 0

while (x < 3) {
    var num2 = parseInt(prompt('ingrese el valor de la segunda lista'));
    numeros = num2 + 1;
    lista2 = lista2 + num2;
    x += 1;
}
document.write('lista 2');
document.write('<br>');
document.write(lista2);
document.write('<br>');

if (lista1 < lista2) {
    document.write('lista 2 es mayor a la lista 1');

    if (lista1 > lista2) {
        document.write('lista 1 es mayor a la lista 2');
    }
} else {
    document.write('ambas listas son iguales');
}


//ejercicio 6

var x = 0
var impares = 0;
var pares = 0;
while (x < 5) {
    var num = parseInt(prompt('ingrese un numero'));

    if (num % 2 == 0) {
        pares = pares + 1;


    }
    if (num % 2 == 1) {
        impares = impares + 1;

    }
    x += 1;
}
document.write('los numeros pares son :', pares);
document.write('<br>');
document.write('los numeros impares son :', impares);
document.write('<br>');


//ejercicio 7

var valor;
var suma = 0;
do {
    valor = prompt(parseInt('Ingrese un valor (9999 para finalizar)', ''));

    if (valor != 9999) {
        suma = suma + valor;
    }
} while (valor != 9999);
document.write('Valor acumulado total:' + suma);
document.write('<br>');
if (suma > 0) {
    document.write('El valor acumulado es mayor a cero');

    if (suma == 0) {
        document.write('El valor acumulado es cero');
    }

} else {
    document.write('El valor acumulado es menor a cero');
}


//ejercicio 8
var f;
var base;
var altura;
var superficie;
var conta1 = 0;
for (f = 1; f <= 3; f++) {
    base = prompt('Ingrese la base:', '');
    base = parseInt(base);
    altura = prompt('Ingrese la altura:', '');
    altura = parseInt(altura);
    superficie = base * altura / 2;
    if (superficie > 12) {
        conta1++;
    }
    document.write('Triángulo nro:' + f + '<br>');
    document.write('Base:' + base + '<br>');
    document.write('Altura:' + altura + '<br>');
    document.write('Superficie:' + superficie + '<br>');
}
document.write('Cantidad de triángulos con superficie mayor a 12:' + conta1);


//ejercicio 9

var suma = 0;
for (var i = 1; i <= 10; i++) {
    var num = parseInt(prompt('ingrese un numero'));
    if (i > 5) {
        suma = suma + num;
    }
}
document.write('la suma de los 5 ultimos numero es igual a: ', suma);

//ejercicio 10

var tabla = 5;
var f = 1;
for (f = 1; f <= 10; f++) {
    document.write(tabla + '-');
    tabla = tabla + 5;
}

//ejercicio 11

var tabla = num;
var num = parseInt(prompt('ingrese un numero'));
for (var f = 1; f <= 12; f++) {
    document.write(tabla + '-');
    tabla = tabla + num;
}

//ejercicio 12

