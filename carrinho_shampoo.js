//programação javascript de inserir um produto no carrinho

const formulario_shampoo = document.getElementById("form_quant_shampoo");
//document.writeln("arroz:",document.getElementById("quantidade").value, "unidades").innerHTML

formulario_shampoo.addEventListener('submit', e =>{
    e.preventDefault();
   
    alert("pedido feito");
    //alert(document.getElementById("quantidade").value);
    document.getElementById("carrinho_shampoo").innerHTML = "shampoo: " + document.getElementById("quantidade_shampoo").value + " unidades";
    
})