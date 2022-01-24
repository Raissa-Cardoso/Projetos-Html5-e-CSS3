//criando variável do tipo Array com objetos em JSON.
//cada índice/posição do arrray é ocupado por um objeto
let data= [];

/*percorrendo cada elemento do Array e executando a função task que cria o li, utiliza o template no html e
adiciona itens na lista ul de class todo*/

function renderTodo(){
    document.querySelector('.todo').innerHTML='' //limpando a lista para cada inserção nova
    data.forEach(task =>{ 
        /*A ARROW FUNCTION CRIA AUTOMATICAMENTE UMA VARIÁVEL COM O MESMO NOME DELA. Neste caso,a arrow function 
        pegou o valor(nesse caso um objeto) de cada elemento da variável array e jogou dentro dessa variável criada*/
        let li= document.createElement('li');
        //criando item da lista como checkbox clicável e inserindo os dados da variável data
        //e criando a tag label, o texto do item será relacionado ao checkox tornando-se clicável        
        li.innerHTML=`
            <input type="checkbox" id="task-${task.id}"> 
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">x</button>
        `;

        //para a criação de um novo li, manipulando class do CSS para riscar item concluído
        li.querySelector('input').addEventListener("change", e=>{ //selecionando a tag do tipo input
            if(e.target.checked){ //essa variável "e" tem como propriedade o target com valor checked true ou false
                li.classList.add('complete'); //adiciona uma classe CSS na tag li
            }else{
                li.classList.remove('complete'); //remove uma classe CSS da tag li
            }
        });

        li.querySelector('button').addEventListener('click', e =>{ //botão de excluir item
            /*console.dir=aparece no console tudo que pode ser manipulado nesse botão
            console.dir(e.target)*/
            //abaixo:selecionado o id do input que está localizado no parentNode (li) do botão
            //depois usando o split, o id (task-1) é dividido em duas posições de um array
            //como o importante é o numero do id, pego a segunda posição do array [1]
            let todoId=e.target.parentNode.querySelector('input').id.split('-')[1]
            let title=e.target.parentNode.querySelector('label').innerText //pegando o texto do label
            /*para confirmar a exclusão de um item
            quando a condição não é testada com nada, o if funciona como se testasse a condição com true*/
            if (confirm(`Deseja realmente excluir a tarefa ${title}?`)){

                /*para que o data receba todos os elementos ignorando o item deletado, temos que filtrar o array 
                com a função filter. 
                Para isso o filter só acontecerá quando o retorno da arrow function for verdadeira
                O array recebe os labels e inputs que nao tenham o id igual ao do selecionado no botão excluir*/
                data=data.filter(task =>task.id!== parseInt(todoId))
                renderTodo()//após refazer o array, a lista é atualizada, reacionando a função de criação da lista
            }
            
        })
        document.querySelector('.todo').append(li);
    });
}

document.querySelector('#new-task').addEventListener('keyup', e => {
    if (e.key==='Enter'){
        data.push({id:data.length+1, title:e.target.value})
        e.target.value=""
        renderTodo()
    }
})

renderTodo()
