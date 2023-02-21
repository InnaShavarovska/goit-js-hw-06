
let inputEl = document.querySelector('#validation-input');


const total = Number(inputEl.getAttribute("data-length"));


const onInputVal = event => {

	const inputLength = event.currentTarget.value.length;
	const classChange = 	event.currentTarget.classList;

	if (inputLength  === total) {
		classChange.remove('invalid');
		classChange.add('valid');
	}  else {
		classChange.remove('valid');
		classChange.add('invalid');
	};
	
	if (inputLength === 0) {
		classChange.remove('invalid');
};
};

inputEl.addEventListener("blur", onInputVal);

