/*let email = 'raissa@email.com';

email = 'raissa@gmail.com';

console.log(`O seu e-mail é: ${email}`);*/

/* EXEMPLOS DE ARROW FUNCTION: document.querySelector('#elemento').addEventListener('evento', e=>{
    ação desse evento})
*/
document.getElementById('btn-submit').addEventListener('click', e =>{
    console.log("o botão foi clicado");
});
/*aqui o js adiciona uma função à "escuta" do evento ocorrido no elemento identificado pelo id que
está dentro do documento index.html*/

document.querySelector('#form-login').addEventListener('mouseenter', e => {
    console.log("o mouse está sobre o formulário");
});
/* queryselector é mais poderoso, mas funciona da mesma maneira que o getElementById. E para chamar um 
elemento é preciso colocar # antes do id*/

document.querySelector('#form-login').addEventListener('submit', e => {//envia o formulário
    e.preventDefault(); /*cancela o comportamento padrão, neste caso de enviar os dados digitados */
    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    /* pega os valores inseridos nos campos do formulário após o evento submit*/
    console.log(email, password);

    let json={   //JSON é um objeto ou um array que consegue modificar o índice/endereço(propriedade) dos elementos
        email: email, //aqui o elemento tem como valor a variavel email e o índice/endereço(propriedade) foi dada o mesmo nome
        password
    };
    /*para uilizar o json: os dados (propriedade:valor) devem ser colocados dentro de chaves
    Se os nomes da propriedade e da variavel forem iguais, é possivel colocar somente uma vez o nome dentro do json*/
    
    /*console.log(json); /*mostra o json como objeto 
    console.log(json.email); mostra somente o valor da propriedade email do json 

    let stringJson = JSON.stringify(json); transforma o objeto json em string 
    console.log(stringJson);    

    let jsonParse = JSON.parse(stringJson); transforma a string json em objeto 
    console.log(jsonParse);*/

    //VALIDAÇÂO EXTRA: caso o usuário retire o required do input
    if (!json.email) { /*se o campo do email estiver vazio ou não existir valor dentro dele */
        console.error("O campo e-mail é de preenchimento obrigatório");
    }
    else if (!json.password) {
        console.error("O campo password é de preenchimento obrigatório");
    }
    else {
        console.info("Dados validados com sucesso");
    }

}); //fechamento da arrow function o evento do envio de formulário
