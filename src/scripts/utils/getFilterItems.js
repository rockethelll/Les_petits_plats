// Populate dropdown filters
import {recipes} from "../../data/recipes.js";
import {capitalizeFirstLetter} from "./capitalizeFirstLetter.js";

function populateDropdown(ulDropdown, itemsSet, type) {
  const $ulElement = document.querySelector(ulDropdown);
  $ulElement.textContent = '';

  // Create a new list item and append it to the ul, for each item in the item set
  itemsSet.forEach((item) => {
    const $li = document.createElement('li');
    $li.textContent = item;
    $li.setAttribute('data-type', type);
    $ulElement.appendChild($li);
  })
}

// Get ingredients options for dropdown menu
export function getIngredientsOptions() {
  let ingredientsSet = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredientsSet.add(ingredient.ingredient.toLowerCase());
    })
  })

  // Convert to a sorted array
  ingredientsSet = new Set(
    [...ingredientsSet]
      .map(capitalizeFirstLetter)
      .sort((a, b) => a.localeCompare(b, 'fr', {sensitivity: "base"}))
  )
  populateDropdown(
    '#ingredients-list',
    ingredientsSet,
    'ingredient')
}

