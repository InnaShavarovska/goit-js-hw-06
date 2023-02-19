const refs = {
	input: document.querySelector('#name-input'),
	name: document.querySelector('h1 > span')
}

const onInputChange = (event) => {
	refs.name.textContent = event.currentTarget.value;
}

refs.input.addEventListener('input', onInputChange);