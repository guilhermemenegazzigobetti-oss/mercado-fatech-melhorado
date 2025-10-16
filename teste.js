//banco de dados do projeto fatech: mercado digital
//local storage indica um armazenamento local ou seja que é permanente
// o setItem significa que ele esta criando um dado
// a primeira parte "nome" é a chave
// a segunda parte "bruno" é o valor da chave
localStorage.setItem("nome","bruno");
// o alert serve para mostra na pagina um alerta
// getItem é extrair um dado
alert(localStorage.getItem("nome"));
let n = 10;
localStorage.setItem("numero", n);
//clear é para apagar dados
localStorage.clear();
//é para identificar onde a chave esta na tabela
localStorage.key(0)
//é para acessar um valor atraves da posição da chave
alert(localStorage.getItem(localStorage.key(0)))
//mostra quantas chaves tem no sistema
alert(localStorage.length())