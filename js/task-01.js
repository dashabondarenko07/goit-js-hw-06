
const allCategoriesElements = document.querySelectorAll("ul#categories li.item");
const numberOfAllCategoriesElements = allCategoriesElements.length;
console.log(`Number of categories: ${numberOfAllCategoriesElements}`);

for (let i = 0; i < numberOfAllCategoriesElements; i += 1) {
    const headerTextElements = allCategoriesElements[i].firstElementChild.textContent;
    console.log(`Category: ${headerTextElements}`);
    
    const lastElement = allCategoriesElements[i].lastElementChild;
    const numberLastElement = lastElement.querySelectorAll('li');
    console.log(`Elements: ${numberLastElement.length}`)
}
