//codigo da barra de pesquisa 
//cria uma constante que armazena o formulario atraves do id
const buscando = document.getElementById("buscando");
//cria um ouvinte de evento
buscando.addEventListener('submit', e =>{
//impede que a pagina recarregue
e.preventDefault();
//armazena uma variavel chamada "escrito" que vai armazenar o valor do que o usuario escreveu
let escrito = document.getElementById("busca").value;
//estrutura encadeada de if e else feita para fazer a pesquisa.
if(escrito == "arroz"){
window.location.href = "arrozBusca.html";
}
else{
if(escrito == "açucar"){
window.location.href = "acucarBusca.html";
}
else{
if(escrito == "feijão"){
window.location.href = "feijaoBusca.html";
}
else{
if(escrito == "oleo de soja"){
window.location.href = "sojaBusca.html";
}
else{
if(escrito == "sabonete"){
window.location.href = "sabaoBusca.html";
}
else{
if(escrito == "sabão em po"){
window.location.href = "sabaoEmPoBusca.html";
}
else{
if(escrito == "shampoo"){
window.location.href = "shampooBusca.html";
}
else{
if(escrito == "condicionador"){
window.location.href = "condicionadorBusca.html";
}
else{
if(escrito == "faca"){
window.location.href = "facaBusca.html";
}
else{
if(escrito == "garfo"){
window.location.href = "garfoBusca.html";
}
else{
if(escrito == "colher"){
window.location.href = "colherBusca.html";
}
else{
if(escrito == "copo"){
window.location.href = "copoBusca.html";
}
else{
alert("nome invalido");
}
}
}
}
}
}
}
}
}
}
}
}

})




