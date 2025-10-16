//programação javascript de inserir um produto no carrinho

const formulario_acucar = document.getElementById("form_quant_acucar");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_acucar.addEventListener('submit', e =>{
    e.preventDefault();
    if(document.getElementById("carrinho_acucar").innerHTML == ""){
    alert("pedido feito");
    document.getElementById("carrinho_acucar").innerHTML =  document.getElementById("quantidade_acucar").value ;
    }
    else{
    alert("pedido adicionado");
    let pedido = document.getElementById("quantidade_acucar").value;
    let pedido_anterior = document.getElementById("carrinho_acucar").innerHTML;
    console.log(pedido_anterior);
    document.getElementById("carrinho_acucar").innerHTML =  parseInt(pedido_anterior) + parseInt(pedido);
    }
})