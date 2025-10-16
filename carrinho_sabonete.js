//programação javascript de inserir um produto no carrinho

const formulario_sabonete = document.getElementById("form_quant_sabao");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_sabonete.addEventListener('submit', e =>{
    e.preventDefault();
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_sabonete").innerHTML = "sabonete: " + document.getElementById("quantidade_sabao").value + " unidades";
    
})