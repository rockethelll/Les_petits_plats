import { capitalizeFirstLetter } from './capitalizeFirstLetter.js';

// Update dropdown list based on the matched recipes in main search

export function updateListOptions(matchedRecipes) {
  // Create store set with unique values
  const ingredientsSet = new Set();
  const appareilsSet = new Set();
  const ustensilesSet = new Set();

  // Iterate on each recipe that matched the search
  matchedRecipes.forEach((recipe) => {
    // Add ingredients from the recipe to the ingredientsSet
    recipe.ingredients.forEach((ingredient) => {
      ingredientsSet.add(ingredient.ingredient.toLowerCase());
    });

    // Add appareils from the recipe to the appareilsSet
    appareilsSet.add(recipe.appliance.toLowerCase());

    // Add ustensils from the recipe to the ustensilsSet
    recipe.ustensils.forEach((ustensil) => {
      ustensilesSet.add(ustensil.toLowerCase());
    });
  });
  console.log('ingerdientsSet', ingredientsSet);
  console.log('appareilsSet', appareilsSet);
  console.log('ustensilesSet', ustensilesSet);

  // Call a function to update the UI list element for each category
  updateListElement(
    document.getElementById('ingredients-list'),
    ingredientsSet,
    'ingredient',
  );
  updateListElement(
    document.getElementById('appareils-list'),
    appareilsSet,
    'appliance',
  );
  updateListElement(
    document.getElementById('ustensiles-list'),
    ustensilesSet,
    'ustensil',
  );
}

export function updateListElement(listElement, setItems, itemType) {
  listElement.textContent = '';

  // Convert setItems to an array, sort it and capitalize the first letter
  const sortedItems = Array.from(setItems)
    .map(capitalizeFirstLetter)
    .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

  // Create li element and append it on the appropriate dropdown
  sortedItems.forEach((item) => {
    const $li = document.createElement('li');
    $li.textContent = item;
    $li.setAttribute('data-type', itemType);

    listElement.appendChild($li)
  })
}
