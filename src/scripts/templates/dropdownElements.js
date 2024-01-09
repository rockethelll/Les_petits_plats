import {capitalizeFirstLetter} from "../utils/capitalizeFirstLetter.js";

// Implement dropdown elements based on the recipes that matched the search criteria.
export function updateListOptions(matchedRecipes) {
  const ingredientsSet = new Set();
  const ustensilesSet = new Set();
  const appareilsSet = new Set();

  matchedRecipes.forEach(recipe => {
    // Add each ingredient from the recipe to the ingredients set.
    recipe.ingredients.forEach(ingredient => {
      ingredientsSet.add(ingredient.ingredient.toLowerCase());
    })
    // Add each utensil from the recipe to the utensils set
    recipe.ustensils.forEach(ustensiles => {
      ustensilesSet.add(ustensiles.toLowerCase());
    })
    // Add the appliance from the recipe to the appliances set
    appareilsSet.add(recipe.appliance.toLowerCase());
  })

  updateElementList(document.getElementById('ingredients-list'), ingredientsSet, 'ingredient');
  updateElementList(document.getElementById('appareils-list'), appareilsSet, 'appliance');
  updateElementList(document.getElementById('ustensiles-list'), ustensilesSet, 'ustensil');
}

export function updateElementList(listElement, itemsSet, itemType) {
  if (!listElement) {
    return;
  }

  listElement.textContent = '';

  // Convert itemsSet to an array, sort it, and capitalize the first letter of each item
  const sortedItems = Array.from(itemsSet)
    .map(capitalizeFirstLetter)
    .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

  // Create and append list items (li elements) for each item in the sorted items list
  sortedItems.forEach(item => {
    const liElement = document.createElement('li');
    liElement.textContent = item;

    // Add data-type attribute
    liElement.setAttribute('data-type', itemType);

    listElement.appendChild(liElement);
  })
}