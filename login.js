// 1. Seleciona o formulário de cadastro pelo seu ID
const formCadastro = document.getElementById('form-cadastro');

// 2. Adiciona um "ouvinte de evento" (event listener) que espera o formulário ser "enviado"
formCadastro.addEventListener('submit', (e) => {
    // 3. Impede que a página recarregue ao enviar o formulário
    e.preventDefault();

    // 4. Pega os valores digitados nos campos de usuário e senha
    const username = document.getElementById('username-cadastro').value;
    const password = document.getElementById('password-cadastro').value;
    const mensagemElement = document.getElementById('mensagem');

    // 5. Cria um objeto JavaScript para armazenar os dados
    const userData = {
        username: username,
        password: password
    };

    // 6. Converte o objeto JavaScript em uma string JSON
    const userDataString = JSON.stringify(userData);

    // 7. Salva a string no localStorage.
    // O primeiro argumento (key) é o "nome" do dado, e o segundo (value) é a string.
    // Usamos o nome de usuário como a chave para facilitar a busca depois.
    localStorage.setItem(username, userDataString);

    // 8. Exibe uma mensagem de sucesso para o usuário
    mensagemElement.textContent = `Usuário ${username} cadastrado com sucesso!`;

    // 9. Limpa os campos do formulário para o próximo cadastro
    formCadastro.reset();
});
// 1. Seleciona o formulário de login pelo seu ID
const formLogin = document.getElementById('form-login');

// 2. Adiciona o ouvinte de evento para o envio do formulário de login
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    // 3. Pega os valores digitados para o login
    const username = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;
    const mensagemElement = document.getElementById('mensagem');

    // 4. Tenta pegar a string JSON do localStorage usando o nome de usuário como chave
    const userString = localStorage.getItem(username);

    // 5. Verifica se o usuário foi encontrado (se a chave existe no localStorage)
    if (userString) {
        // 6. Converte a string JSON de volta para um objeto JavaScript
        const storedUser = JSON.parse(userString);

        // 7. Compara a senha digitada com a senha armazenada
        if (storedUser.password === password) {
            mensagemElement.textContent = `Bem-vindo, ${username}! Login bem-sucedido.`;
            window.location.href = "mercado.html";
        } else {
            mensagemElement.textContent = 'Senha incorreta.';
        }
    } else {
        // 8. Se a chave não foi encontrada, o usuário não existe
        mensagemElement.textContent = 'Usuário não encontrado.';
    }

    formLogin.reset();
});