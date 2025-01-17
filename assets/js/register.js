const registerForm = document.getElementById('register-area');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('userName', username);
    localStorage.setItem('userSurname', surname);
    localStorage.setItem('userCpf', cpf);
    localStorage.setItem('userPassword', password);

    alert('Usuário cadastrado com sucesso!');

    window.location.href = '../pages/login.html';
});