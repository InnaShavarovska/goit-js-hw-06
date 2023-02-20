"use strict";

const numberCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numberCategories.length}`);


const categories = numberCategories.forEach(categorie => 
 console.log(`Category: ${categorie.firstElementChild.textContent}
Elements: ${categorie.lastElementChild.children.length}`
  ))
  .join("\n");
console.log(categories);
