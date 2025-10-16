//programação javascript de inserir um produto no carrinho

const formulario_soja = document.getElementById("form_quant_soja");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_soja.addEventListener('submit', e =>{
    e.preventDefault();
    
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_oleo").innerHTML = "soja: " + document.getElementById("quantidade_soja").value + " unidades";
})