import os #libreria para llamar archico


nombre = int(input("Ingrese cuantos nombre quiere ingresar "))

for g in range(0,nombre):
    a = str(input("ingresa un nombre "))
    fanny = [a]

for f in fanny:
     if len(f) > len(fanny):
            #print(len(f))
            print("Este es el nombre mas grande",f," con ",len(f)," letras")
"""try:
    mi_archivo = open("ejemplo02.py")
    print(mi_archivo.read())
finally:
    mi_archivo.close()"""

#llamar a un archico dentro de otro archivo
os.system("ejemplo02.py")

