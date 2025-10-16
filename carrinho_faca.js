//programação javascript de inserir um produto no carrinho

const formulario_faca = document.getElementById("form_quant_faca");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_faca.addEventListener('submit', e =>{
    e.preventDefault();
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_faca").innerHTML = "faca: " + document.getElementById("quantidade_faca").value + " unidades";

    
})