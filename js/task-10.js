function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  btnCreat: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes')
}

const createBoxes = amount => {

 const boxArray = [];
 let size = 30;

 for (let i = 0; i < amount; i++) {
  size += 10;
  const newDiv = document.createElement('div');
  newDiv.style.width = `${size}px`;
  newDiv.style.height = `${size}px`;
  newDiv.style.backgroundColor = getRandomHexColor();
  boxArray.push(newDiv);
 };
 return refs.divBoxes.append(...boxArray);
};

const destroyBoxes  = () => {
    refs.input.value = '';
    return refs.divBoxes.innerHTML = '';
};

const inputValue = event => {
  let value = 0;
  value = event.currentTarget.value;
  return value;
};

refs.input.addEventListener('input', inputValue);
refs.btnCreat.addEventListener('click', function () {
  return createBoxes(Number(refs.input.value));
});

refs.btnDestroy.addEventListener('click', destroyBoxes);