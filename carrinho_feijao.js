//programação javascript de inserir um produto no carrinho

const formulario_feijao = document.getElementById("form_quant_feijao");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_feijao.addEventListener('submit', e =>{
    e.preventDefault();
   
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_feijao").innerHTML = "feijão: " + document.getElementById("quantidade_feijao").value + " unidades";
    
})