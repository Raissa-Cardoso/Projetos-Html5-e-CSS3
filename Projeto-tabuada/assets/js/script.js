function calculaTabuada() {
  
    let tabuada = document.querySelector("#tabuada tbody"); //pegando somente o tody da tabela
     
    let valorA = parseInt(document.querySelector("#valorA").value);
    /*recebendo o valor do input e convertendo em inteiro 
    Já que a tabuada é feita somente para números inteiros, troca-se o Number por parseInt*/

    tabuada.innerHTML=""; /*limpando a tabuada para utilizar várias vezes */

    for (let valorB = 0; valorB <= 10; valorB++) { /*laço de repetição para a tabuada */
        let resultado = valorA * valorB;
        //criando um template string ao inves de criar os elementos td assim como o tr logo abaixo
        let template = `        
                <td>${valorA}</td>
                <td>X</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            `;
        let tr= document.createElement("tr"); /*criando um elemento tr dinamicamente no html da api do DOM */
        tr.innerHTML= template; /*para inserir uma STRING usa-se o innerHTML*/
        tabuada.append(tr); /*adicionando variável tr no tbody. Por não ser appendChild, uma nova tabela surge por cima*/
    }
}

calculaTabuada(); //acionando a função tabuada ao carregar a página, lembrando que o input começa com value=0

/*para receber o valor o input valorA, toda vez que ele for alterado e chamar a função calculaTabuada*/
document.querySelector("#valorA").addEventListener("change", calculaTabuada); 
/*ou document.querySelector('#valorA').addEventListener('change', e=>{ calculaTabuada())}*/





