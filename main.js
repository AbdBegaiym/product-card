const productCards = document.querySelectorAll('.products__item');
const changeColorCardBtn = document.querySelector('#change-color-all-cards-btn');
const orangeColorHash = '#f7e6d8';
const pinkColorHash = '#fce1ee';

changeColorCardBtn.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = orangeColorHash);
});

const firstProductCard = document.querySelector('.products__item');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-card-btn');

changeColorFirstCardBtn.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = pinkColorHash;
});

const openGoogleBtn = document.querySelector('#open-google-btn');
openGoogleBtn.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы уверены, что хотите открыть страницу Google?');
    if (answer === true) {
        window.open('https://google.com');
    } else {
        return;
    }
}

// вывод консоль лог

const outputLogBtn = document.querySelector('#output-console-log-btn');
outputLogBtn.addEventListener('click', () => outputConsoleLog('ДЗ 6'));

function outputConsoleLog(message) {
    alert(message);
    console.log(message);
}

// вывод заголовка в консоль

const outputTitle = document.querySelector('.title');
outputTitle.addEventListener('mouseover', () => {
    console.log(outputTitle.textContent);
});

// смена цвета карточки
const colorBtn = document.querySelector('.color-btn');

colorBtn.addEventListener('click', () => {
    colorBtn.classList.toggle('active');
});