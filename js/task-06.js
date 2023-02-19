
let inputEl = document.querySelector('#validation-input');


const total = Number(inputEl.getAttribute("data-length"));


const onInputVal = event => {
	if (event.currentTarget.value.length > total) {
		event.currentTarget.classList.remove('valid');
		event.currentTarget.classList.add('invalid');
	} 
	if (event.currentTarget.value.length <= total) {
	event.currentTarget.classList.remove('invalid');
	event.currentTarget.classList.add('valid');
	} 
	if (event.currentTarget.value.length === 0 ) {
	event.currentTarget.classList.remove('valid');
	event.currentTarget.classList.remove('invalid');
	}
};

inputEl.addEventListener("blur", onInputVal);

