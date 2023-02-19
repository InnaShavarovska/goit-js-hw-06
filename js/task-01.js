"use strict";

const numberCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberCategories.length}`);


const categories = [...numberCategories]
  .map(
    categorie => `Category: ${categorie.children[0].textContent}
Elements: ${categorie.children[1].children.length}`
  )
  .join("\n");
console.log(categories);
