//programação javascript de inserir um produto no carrinho

const formulario_copo = document.getElementById("form_quant_copo");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_copo.addEventListener('submit', e =>{
    e.preventDefault();
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_copo").innerHTML = "copo: " + document.getElementById("quantidade_copo").value + " unidades";

    
})