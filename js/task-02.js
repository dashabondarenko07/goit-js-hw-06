const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsItem = ingredients.map((ingredientName) => {
  const itemLi = document.createElement('li');
  itemLi.textContent = ingredientName;
  itemLi.classList.add('item');
  console.log(itemLi);
  return itemLi;
});

ingredientsList.append(...ingredientsItem);