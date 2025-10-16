//programação javascript de inserir um produto no carrinho

const formulario = document.getElementById("form_quant_acucar");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_açucar").innerHTML = "açucar: " + document.getElementById("quantidade_acucar").value + " unidades";

    
})