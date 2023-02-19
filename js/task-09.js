function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  body: document.querySelector('body')
};

const onChangeColor = event => {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
};

refs.btn.addEventListener('click', onChangeColor)