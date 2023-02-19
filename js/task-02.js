const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.querySelector("#ingredients");

console.log(ulList);

const foodIngredients = ingredients.map(ingredient => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  return listEl;
}
);

ulList.append(...foodIngredients);



