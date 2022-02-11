const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const aa = function (event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}

fontSizeControl.addEventListener('input', aa)