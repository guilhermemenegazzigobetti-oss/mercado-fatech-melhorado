//programação javascript de inserir um produto no carrinho

const formulario_garfo = document.getElementById("form_quant_garfo");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_garfo.addEventListener('submit', e =>{
    e.preventDefault();
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_garfo").innerHTML = "garfo: " + document.getElementById("quantidade_garfo").value + " unidades";

    
})