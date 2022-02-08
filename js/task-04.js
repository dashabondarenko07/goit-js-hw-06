
let counterValue = 0;

let number = document.querySelector('#value');
const btnPlus = document.querySelector('[data-action = "increment"]');
const btnMinus = document.querySelector('[data-action = "decrement"]');

btnPlus.addEventListener('click', () => {
    counterValue += 1;
    number.textContent = counterValue;
});

btnMinus.addEventListener("click", () => {
    counterValue -= 1;
    number.textContent = counterValue;
});
