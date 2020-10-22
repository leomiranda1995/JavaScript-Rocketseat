/* 1º exercício
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
function checaIdade(idade) {
// Retornar uma promise
}
checaIdade(20)
.then(function() {
console.log("Maior que 18");
})
.catch(function() {
console.log("Menor que 18");
});
    */

function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (idade >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

checaIdade(17)
    .then(res => {console.log('Maior de idade')})
    .catch(err => {console.log('Menor de idade')});


/* 2º exercício
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
    <li>repo1</li>
    <li>repo2</li>
    <li>repo3</li>
    <li>repo4</li>
    <li>repo5</li>
</ul>*/

var divElement = document.querySelector('div#usergithub');
var inputElement = document.querySelector('div#usergithub input[name=user]');
var buttonElement = document.querySelector('div#usergithub button');

buttonElement.onclick = function() {
    if (inputElement.value !== '') {
        axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
            .then((response)=>{
                mostraRepositorios(response.data)
            })
            .catch((error)=>{console.log('Erro na requisição')})
    }
}

function mostraRepositorios(repos) {
    var listElement = document.createElement('ul');
    for(repo of repos) {
        var itemList = document.createElement('li');
        var textItemList = document.createTextNode(repo.name);
        itemList.appendChild(textItemList);
        listElement.appendChild(itemList);
    }
    divElement.appendChild(listElement);
}