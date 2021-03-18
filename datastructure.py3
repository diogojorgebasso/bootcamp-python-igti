#conjuntos em Python ==> desordenado, mutavel e sem eleemntos dupliados
conjuntoA= set() #muito legal!
print("conjunto A:", conjuntoA)
print(type(conjuntoA))
conjuntoA.update([12,14])
conjuntoA.update((45,51))
print(conjuntoA)
conjuntoB = set([4,8,9])
print(conjuntoA.union(conjuntoB))
print(conjuntoA.intersection(conjuntoB))
print(conjuntoA.issubset(conjuntoB))
print(conjuntoA.difference(conjuntoB))
print(conjuntoA.symmetric_difference(conjuntoB))
dicionario = {'Diogo': 17, 'enrico':16, 'umberto':47}
dicionario[0] = 'bolsonaro!'
dicionario[1] = 'bananinha'
print(dicionario)
print(dicionario[0])
#exceção
a = int(input('digita ai parceirao'))
b = int(input('teste:'))
try:
    print(a/b)
except:
    print('puts cara, deu problema ai')
else:
    print('Ow Glória, passamos!!!')
if a in range(0,10):
    print('ta dentro safadinho')
def factorial(n):
    total = 1
    for x in range(1,n+1):
        total *= x
    print(total)
factorial(a)
i=0
while i<a:
    i+=1
    if i == 4:
        pass
    print(i)
print(__name__)
