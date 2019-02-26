
var num1,num2;
  num1=parseInt(prompt('Ingrese el primer número:',''));
  num2=parseInt(prompt('Ingrese el segundo número:',''));
  if (num1>num2){
    var suma,diferencia;
    suma=num1+num2;
    diferencia=num1-num2;
    document.write('La suma es:'+suma);
    document.write('<br>');
    document.write('La diferencia es:'+diferencia);
  }
  else{
    var producto,division;
    producto=num1*num2;
    division=num1/num2;
    document.write('El producto es '+producto);
    document.write('<br>');
    document.write('La división del primero respecto al segundo es:'+division);
  }

  //ejercicio 2
  var num1,num2,num3;
  num1=parseInt(prompt('Ingrese primer valor:',''));
  num2=parseInt(prompt('Ingrese segundo valor:',''));
  num3=parseInt(prompt('Ingrese tercer valor:',''));
  if (num1>num2){
    if (num1>num3){
      document.write('El mayor de los tres es:'+num1); 
    }else{
       document.write('El mayor de los tres es:'+num3); 
    }
  }else{
    if (num2>num3){
       document.write('El mayor de los tres es:'+num2);   
    }else{
       document.write('El mayor de los tres es:'+num3);   
    }
  }
  
  //ejercicio 3
var num=parseInt(prompt('ingrese un numero de 1,2 o 3 digitos'));

if(num<10){
    document.write('el numero es de una sola cifra');
}
if(num<100&&num>9){
    document.write('el numero es de dos cifras');
}
if(num<1000&&num>99){
    document.write('el numero es de tres cifras');
}

//ejercicio 4
var sueldo=parseInt(prompt('ingrese su sueldo'));
var años= parseInt(prompt('ingrese los años de antiguedad'));
if(sueldo<500&&años>=10){
  var aumento=sueldo+sueldo*0.20;
  document.write('se le ha hecho un aumento de 20%', aumento);
}
if(sueldo<500&&años<=10){
  var aumento=sueldo+sueldo*0.5;
  document.write('se le ha hecho un aumento de 5%', aumento);
}
if(sueldo>=500){
  document.write('su sueldo no cambia: ', sueldo);
}

//ejercicio 5
var palabra=prompt('ingrese cualquiera de estas palabras casa, mesa, perro, gato');
switch(palabra){
 case 'casa':document.write('hause');
  break;
 case 'mesa':document.write('table');
  break;
 case 'perro':document.write('dog');
  break;
 case 'gato':document.write('cat');
  break;
}
//ejercicio 6
var serie=11;
  var x=1;
  while (x<=25){
    document.write(serie);
    document.write('<br>');
    x=x+1;
    serie=serie+11;
  }



