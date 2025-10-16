//programação javascript no carrinho
 const formcarrinho = document.getElementById("carrinho")

    formcarrinho.addEventListener('submit' , e => {
    
   const valor = Number(document.getElementById("numero").value);

    const nome_produto = String(document.getElementById(".feijao"));

    if(valor <= 0) {
    alert("valor invalido");
    }
    else{
    alert("item adicionado");

    localStorage.setItem(nome_produto, valor);

   console.log("entendi");
    }
   
    })

    formcarrinho.addEventListener('submit', e => {

        e.preventDefault();


  const numero = Number(document.getElementById("numero").value);

  console.log(numero);



  console.log("obaaa");


  const produto = '<strong> ola </strong>';
//manipulei os dados com DOM para não substituir a pagina
// o innerHTML serve para fazer a variavel const parte de um documento html, para não substituir a pagina original
  document("produto").innerHTML += produto;


  })
      

