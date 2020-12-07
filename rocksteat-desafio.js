/*Enunciado:
Crie uma função que dado o objeto a seguir:
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};
Retorne o seguinte conteúdo:
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
*/
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"}
function ObjetoTexto(objeto){
    return `O usuário mora em ${objeto.cidade}/${objeto.uf}, no bairro ${objeto.bairro}, na rua "${objeto.rua} com nº ${objeto.numero}`
}
console.log(ObjetoTexto(endereco))
/*Enunciado 2:
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321); */
function Pares(x, y) {
    for (x; x<y+1; x++) {
      if(x % 2 === 0) {
        console.log(x);
      }
    }
  }
/*Exercíio 4: 
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false*/
function temHabilidade(skills) {
    if (skills.indexOf('Javascript') === -1){
        return false
    }
    return true
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
/* Exercício 5:
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master*/
function experiencia(anos) {
    if (0 <=anos <=1){
        return "Iniciante"
    }
    if (1< anos <= 3){
        return "Intermediário"
    }
    if (3 < anos <= 6){
        return "Avançado"
    }
    if (anos>=7){
        return "Jedi Master"
    }
}
var anosEstudo = 7;
experiencia(anosEstudo)

function SaveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos)) || []
}
var todos = JSON.parse(localStorage.getItem('list_todos'))
function RenderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        let Element = document.createElement('li')
        let todoText = document.createTextNode(todo)
        let linkElement = document.createElement('a')
        linkElement.setAttribute('href', 'a')
        let pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')')
    }
}

var minhaPromisse = function(){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest
        xhr.open('GET', 'https://api.github.com/users/DiogoJBasso')
        xhr.send(null)
        xhr.onreadystatechange = async function() {
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject("Erro na requisição")
                }
                }
            }
    })
}
/*
var resultado = minhaPromisse()
console.log(resultado) //executa a linha 20 antes de ja ter chego a promisse*/
minhaPromisse()
    .then(function(response){
        console.log(response)
        //código, caso dê certo
    })
    .catch(function(error){
        console.warn(error)
    })


axios.get('https://api.github.com/users/DiogoJBasso')
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.warn(error)
})