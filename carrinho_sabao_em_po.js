//programação javascript de inserir um produto no carrinho

const formulario_sabao_po = document.getElementById("form_quant_sabao_po");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_sabao_po.addEventListener('submit', e =>{
    e.preventDefault();
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_sabao_em_po").innerHTML = "sabao em po: " + document.getElementById("quantidade_sabao_po").value + " unidades";
})