const inputEl = document.querySelector('#validation-input');
const minLength = document.querySelector('[data-length="6"]');
const totalMinLength = minLength.dataset.length;

inputEl.addEventListener('blur', event => {
	const eventValueLength = event.currentTarget.value.length;

	if (eventValueLength < totalMinLength || eventValueLength > totalMinLength) {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
	} else {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
    }
});