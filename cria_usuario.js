 function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Salva as informações no localStorage (não recomendado para senhas)
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
 }