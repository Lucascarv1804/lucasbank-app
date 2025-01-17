function updateUserDisplay(user) {
    document.querySelector('.balance-amount').textContent = user.balance.toFixed(2);
    document.querySelector('.card-name').textContent = `${user.username} ${user.surname}`;
    document.querySelector('.card-number').textContent = '1234 5678 9123 4567';
    document.querySelector('.card-vadility').textContent = '10/25';
}

const users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users);

const currentUserCPF = localStorage.getItem('currentUser');

const currentUser = users.find(user => user.cpf === currentUserCPF);

if (!currentUser) {
    alert('Nenhum usuário logado. Redirecionando para o login.');
    window.location.href = '../pages/login.html';
} else {
    updateUserDisplay(currentUser);
}

// Hide Button ===================================================================
const hideBtn = document.querySelector('.hide-btn');
const hideIcon = document.getElementById('hide-icon');

const balanceAmount = document.querySelector('.balance-amount');
const cardNumber = document.querySelector('.card-number');
const cardVadility = document.querySelector('.card-vadility');

let isHidden = false;

const maskData = (data, maskChar = '*') => {
    return data.replace(/./g, maskChar);
};

hideBtn.addEventListener('click', () => {
    if (isHidden) {
        updateUserDisplay(currentUser);
    } else {
        balanceAmount.textContent = maskData(balanceAmount.textContent);
        cardNumber.textContent = maskData(cardNumber.textContent);
        cardVadility.textContent = maskData(cardVadility.textContent);
    }

    hideIcon.classList.toggle('bi-eye-slash-fill');
    hideIcon.classList.toggle('bi-eye-fill');

    isHidden = !isHidden;
});

// LOGOUT BUTTON
const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');

    alert('Deslogando... Você será redirecionado!');

    window.location.href = '../index.html';
});