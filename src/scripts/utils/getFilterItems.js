import { recipes } from '../../data/recipes.js';
import { capitalizeFirstLetter } from './capitalizeFirstLetter.js';

// Populate dropdown filters
function populateDropdown(ulDropdown, itemsSet, type) {
  const $ulElement = document.querySelector(ulDropdown);
  $ulElement.textContent = '';

  // Create a new list item and append it to the ul, for each item in the item set
  itemsSet.forEach((item) => {
    const $li = document.createElement('li');
    $li.textContent = item;
    $li.setAttribute('data-type', type);
    $ulElement.appendChild($li);
  });
}

// Get ingredients options for dropdown menu
export function getIngredientsOptions() {
  // Create new set to store ingredients
  let ingredientsSet = new Set();

  // Add all ingredients from all recipes
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredientsSet.add(ingredient.ingredient.toLowerCase());
    });
  });

  // Convert the set to a sorted array
  ingredientsSet = new Set(
    [...ingredientsSet]
      .map(capitalizeFirstLetter)
      .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' })),
  );
  // Call the function to populate ingredients dropdown
  populateDropdown('#ingredients-list', ingredientsSet, 'ingredient');
}

// Get appareils options for dropdown menu
export function getAppareilsOptions() {
  // Create new set to store appareils
  let appliancesSet = new Set();

  // Add all appareils from all recipes
  recipes.forEach((recipe) => {
    appliancesSet.add(recipe.appliance.toLowerCase());
  });

  // Convert the set to a sorted array
  appliancesSet = new Set(
    [...appliancesSet]
      .map(capitalizeFirstLetter)
      .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' })),
  );

  // Call the function to populate appareils dropdown
  populateDropdown('#appareils-list', appliancesSet, 'appliance');
}

// Get ustensils options for dropdown menu
export function getUstensilsOptions() {
  // Create new set to store ustensils
  let ustensilsSet = new Set();

  // Add all ustensils from all recipes
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      ustensilsSet.add(ustensil.toLowerCase());
    });
  });

  // Convert the set to a sorted array
  ustensilsSet = new Set(
    [...ustensilsSet]
      .map(capitalizeFirstLetter)
      .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' })),
  );

  // Call the function to populate ustensils dropdown
  populateDropdown('#ustensiles-list', ustensilsSet, 'ustensil');
}
