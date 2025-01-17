const loginForm = document.getElementById('login-area');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;

    const storedCpf = localStorage.getItem('userCpf');
    const storedPassword = localStorage.getItem('userPassword');

    if(cpf === storedCpf && password === storedPassword) {
        alert('Logado com sucesso!');
        window.location.href = '../pages/bank.html';
    } else {
        alert('Usuário não cadastrado!');
        window.location.href = '../pages/register.html';
    }
});