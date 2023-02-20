const refs = {
	input: document.querySelector('#name-input'),
	name: document.querySelector('h1 > span')
}

const onInputChange = (event) => {
	if (event.currentTarget.value !== '') {
		refs.name.textContent = event.currentTarget.value;
	} else {
		refs.name.textContent = 'Anonymous';
	}
}

refs.input.addEventListener('input', onInputChange);