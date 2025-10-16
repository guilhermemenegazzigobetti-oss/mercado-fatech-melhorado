//programação javascript de inserir um produto no carrinho

const formulario_condicionador = document.getElementById("form_quant_condicionador");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_condicionador.addEventListener('submit', e =>{
    e.preventDefault();

    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_condicionador").innerHTML = "condicionador: " + document.getElementById("quantidade_condicionador").value + " unidades";
})