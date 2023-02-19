
const inputEl = document.querySelector('#validation-input');


const total = inputEl.getAttribute("data-length");


inputEl.addEventListener('blur', onInputVal)

const onInputVal = event => {
	if (event.currentTarget.value.length > total) {
		
	}
};

