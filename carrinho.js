//programação javascript de inserir um produto no carrinho

const formulario = document.getElementById("form_quant");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho").innerHTML = "arroz: " + document.getElementById("quantidade").value + " unidades";
;
    
})


