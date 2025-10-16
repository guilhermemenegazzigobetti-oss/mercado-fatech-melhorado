//programação javascript de inserir um produto no carrinho

const formulario_colher = document.getElementById("form_quant_colher");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_colher.addEventListener('submit', e =>{
    e.preventDefault();
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_colher").innerHTML = "colher: " + document.getElementById("quantidade_colher").value + " unidades";

    
})