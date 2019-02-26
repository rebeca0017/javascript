

"""###ver si un numero introducido por el usuario es par o impar 
num = int(input('Introduzca un numero: '))
def numeros(num):#funcion 
        if num%2 == 0: #conficion, modulo 
            print('Par')
        else:
            print('Impar')
numeros(num)#retornamos la funcion"""

"""###Ejemplo for, imprime los 20 primeros numeros en una linea
for i in range(20):
    print(i, end=" ") #imprimir numero, sin salto linea
    print() #lineavacia"""

"""###Ejemplo foreach, imprime los numeros de la lista
for i in [1, 5, 7, "hola", "bb"]:
    print(i, end=" ") #imprimir numero, sin salto linea
    print() #lineavacia
    
###Ejemplo foreach, imprime las letras TEXTO
for i in "TEXTO":
    print(i)

###Ejemplo while, imprime los primeros 20 numeros
i = 1
while i <= 25: 
    print(i),
    i += 3

###Ejemplo de función
n1= int(input("ingrese un primer numero"))
n2= int(input("ingrese un segundo numero"))
def maximo():
    if n1 < n2:
        return n2
    elif n2 < n1:
        return n1
    else:
        return n1"""
 


"""###ejemplo if 
numero = int(input("Escriba un número positivo: "))
if numero < 0:
    print("¡un número positivo!")
else:
    print("Ha escrito el número",numero)

print("Piense un número de 1 a 4.")
print("Conteste S (sí) o N (no) a mis preguntas.")
primera = input("¿El número pensado es mayor que 2? ")
if primera == "S":
    segunda= input("¿El número pensado es mayor que 3? ")
    if segunda == "S":
        print("El número pensado es 4.")
    else:
        print("El número pensado es 3")
else: 
    segunda = input("¿El número pensado es mayor que 1? ")
    if segunda == "S":
        print("El número pensado es 2.")
    else:
        print("El número pensado es 1.")

###elementos de una cadena
def cadena (lista):
    cont = 0
    for i in lista:
        cont += 1
    return cont
print (cadena ("hola"))

###true o false 
def esvocal (x):
    if x == "a" or x == "e" or x == "i" or x == "o" or x == "u":
        return True
    elif x == "A" or x == "E" or x == "I" or x == "O" or x == "U":
        return True
    else:
        return False
print(esvocal("a"))

###suma y multiplicacion 

def sum (lista):
    suma = 0
    for i in lista:
        suma += i
    return suma
print(sum([1,2,3,4]))
        
    
def multip (lista):
    multiplicacion = 1
    for i in lista:
        multiplicacion *= i
    return multiplicacion
print(multip([1,2,3,4]))"""

###lista mas larga 
def mas_larga(lista):
    mas_larga = ""
    for i in lista:
        if len(i) > len(mas_larga):
            mas_larga = i
    return mas_larga
print(mas_larga("caza"))

