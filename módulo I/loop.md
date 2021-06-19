# Loops

O loop é uma repetição iterada, ao passo de uma quantidade.

```py
sequencia = range(0,5)
for num in sequencia:
  print(num)

sum = 0
for num in sequencia:
  sum+= num
print(sum)

sequencia = range(0,5)
for num in sequencia:
  print(num)
else:
  print('loop terminou normalmente')

sequencia = range(0,5)
for num in sequencia:
  if num <3:
    print(num)
  else:
    break
else:
  print('loop terminou normalmente')

## PERIGO DE LOOP INFINITO

#ilustrando loop while
num = 5
while num >0:
  print(num)
  num -=1       #necessário para evitar o loop infinito

```
