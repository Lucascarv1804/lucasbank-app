const amountDisplay = document.querySelector('.amount');
const sendButton = document.getElementById('send-btn');
const keys = document.querySelectorAll('.key');

let amount = '';

keys.forEach((key) => {
    key.addEventListener('click', () => {
        const value = key.textContent;

        if (value === '⌫') {
            // Remove o último caractere
            amount = amount.slice(0, -1);
        } else if (value === '.') {
            // Adiciona o ponto decimal, se já não existir
            if (!amount.includes('.')) {
                amount += value;
            }
        } else {
            // Adiciona o número, respeitando 2 casas decimais
            if (amount.includes('.')) {
                const [intPart, decimalPart] = amount.split('.');
                if (decimalPart.length < 2) {
                    amount += value;
                }
            } else {
                amount += value;
            }
        }

        // Atualiza a exibição
        amountDisplay.textContent = amount || '0';
        sendButton.textContent = `Enviar $${amount || '0'}`;
    });
});

// LOCAL STORAGE
const users = JSON.parse(localStorage.getItem('users')) || [];

const currentUserCPF = localStorage.getItem('currentUser');

const currentUser = users.find(user => user.cpf === currentUserCPF);


// HIDE BUTTON
const hideBtn = document.querySelector('.hide-btn');
const hideIcon = document.getElementById('hide-icon');

const balanceAmount = document.querySelector('.balance-amount');
balanceAmount.textContent = currentUser.balance.toFixed(2);

let isHidden = false;

const maskData = (data, maskChar = '*') => {
    return data.replace(/./g, maskChar);
};

hideBtn.addEventListener('click', () => {
    if (isHidden) {
        balanceAmount.textContent = currentUser.balance.toFixed(2);
    } else {
        balanceAmount.textContent = maskData(balanceAmount.textContent);
    }

    hideIcon.classList.toggle('bi-eye-slash-fill');
    hideIcon.classList.toggle('bi-eye-fill');

    isHidden = !isHidden;
});

// LOGOUT BUTTON
const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');

    alert('Deslogando... Você será redirecionado ao clicar em "Ok"');

    window.location.href = '../index.html';
});