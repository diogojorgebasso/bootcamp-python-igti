# Dados em Python:

**Todos** os elementos em Python são objetos. Cada
objeto possui propriedades específicas que são utilizadas para distingui-los. Essas
propriedades são:

- Identidade: é única. É criada no momento em que o objeto é criado.
  Normalmente é representado pelo endereço de memória do objeto.
- Tipo (type): determina o tipo de objeto.
- Valor (value): representa o valor real (atual) armazenado pelo objeto.

### String

```py3
minha_string ="Disciplina Aplicações em Deep Learning"  #armazena a string
id(minha_string) #identificador do objeto
type(minha_string) #tipo de objeto
minha_string  #mostra a string armazenada

### CONCATENAÇÃO

s1 = "Esta é a disciplina"
s2 = " Aplicações em Deep Learning"
print(s1,s2)

### INVERSÃO

s1[::-1] # percorre a string de maneira inversa
```

### Tuplas

- são imutáveis
- são assinaladas com um parênteses

```py3

tupla = (['IGTI','Disciplina'],['Aplicações','Deep Learning'])
tupla[0] #

```
