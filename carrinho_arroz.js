//programação javascript de inserir um produto no carrinho

const formulario_arroz = document.getElementById("form_quant_arroz");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_arroz.addEventListener('submit', e =>{
    e.preventDefault();
    
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_arroz").innerHTML = "arroz: " + document.getElementById("quantidade_arroz").value + " unidades";

})