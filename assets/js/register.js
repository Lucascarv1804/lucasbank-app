const registerForm = document.getElementById('register-area');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;

    // Lê os usuários do localStorage ou inicializa um array vazio
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o CPF já está cadastrado
    if (users.some(user => user.cpf === cpf)) {
        alert('CPF já cadastrado! Tente novamente.');
        return;
    }

    // Gerando ID único para cada usuário cadastrado
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    // Cria o novo usuário
    const newUser = {
        id: newId,
        username,
        surname,
        cpf,
        password,
        balance: 5000,
    };

    // Adiciona o novo usuário ao array de usuários
    users.push(newUser);

    // Salva o array atualizado no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Usuário cadastrado com sucesso!');

    // Redireciona para a página de login
    window.location.href = '../pages/login.html';
});
