const loginForm = document.getElementById('login-area');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const cpf = document.getElementById('cpf').value.trim(); // trim() remove os espaços extras
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.cpf === cpf);

    if (user) {
        if (user.password === password) {
            localStorage.setItem('currentUser', user.cpf);
            alert('Logado com sucesso!');
            window.location.href = '../pages/bank.html';
        } else {
            const passwordInput = document.getElementById('password');
            alert('Senha incorreta! Tente novamente');
            passwordInput.value = '';
        }
    } else {
        alert('Usuário não cadastrado!');
        window.location.href = '../pages/register.html';
    }
});