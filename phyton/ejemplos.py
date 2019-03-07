numero=int(input("ingrese un numero cualquiera"))
def primo(numero):
    """
    Funcion que determina si un numero es primo
    Tiene que recibir el numero entero
    """
    # Para que un numero sea primo, unicamente tiene que dividirse dos veces:
    #   1 - divisible entre 1
    #   2 - divisible entre el mismo
    # En este bucle, empezamos por el dos hasta un numero anterior a el, por lo
    # que si en el bucle, alguna vez se divide el numero, quiere decir que no es
    # primo

    if numero==numero and numero==1:
        print("el numero", numero,"es primo")
    else:
        print("el numero",numero,"no es primo ")

primo(numero)
    

           