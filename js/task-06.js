
let inputEl = document.querySelector('#validation-input');


const total = Number(inputEl.getAttribute("data-length"));


const onInputVal = event => {

	const inputLength = event.currentTarget.value.length;
	const classChange = 	event.currentTarget.classList;


	if (inputLength  > total) {
		classChange.remove('valid');
		classChange.add('invalid');
	} 
	if (inputLength  === total) {
		classChange.remove('invalid');
		classChange.add('valid');
	} 
	if (inputLength === 0) {
		classChange.remove('valid');
		classChange.remove('invalid');
	}
	if (inputLength < total) {
		classChange.remove('valid');
		classChange.add('invalid');
	}
};

inputEl.addEventListener("blur", onInputVal);

