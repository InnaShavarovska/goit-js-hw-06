const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

text.style.fontSize = inputEl.value+"px";

const onInputChange = event => {
	text.style.fontSize = event.currentTarget.value + "px";
};

inputEl.addEventListener('input', onInputChange);