import { recipes } from '../../data/recipes.js';
import { RecipesFactory } from '../factories/RecipesFactory.js';

export let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  const mainSearch = document.getElementById('main-search');
  const tagContainer = document.querySelector('.tag-container');
  mainSearch.addEventListener('input', () => {
    currentSearchQuery = mainSearch.value.trim().toLowerCase();
    console.log(currentSearchQuery);
    filteredRecipes();
  });
});

// Search recipes by name, ingredients, or description
export function searchRecipes(query, recipesToFilter = recipes) {
  const searchTerms = query.toLowerCase().split(' ');
  const matchedRecipes = [];

  recipesToFilter.forEach((recipe) => {
    const searchableText = `${recipe.name.toLowerCase()} ${recipe.description.toLowerCase()} ${recipe.ingredients
      .map((ingredient) => ingredient.ingredient.toLowerCase())
      .join(' ')}`;

    if (searchTerms.every((term) => searchableText.includes(term))) {
      matchedRecipes.push(recipe);
    }
  });

  return matchedRecipes;
}

// Update the recipe section with the matched recipes
export function updateRecipeSection(matchedRecipes) {
  if (!matchedRecipes) {
    console.error('matchedRecipes is undefined');
  }
  const recipeSection = document.querySelector('.recipes-gallery');
  recipeSection.textContent = '';

  //Display message if no recipe is found
  if (matchedRecipes.length === 0) {
    const errorMessages = document.createElement('p');
    errorMessages.classList.add('error-message');
    errorMessages.textContent =
      'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
    recipeSection.appendChild(errorMessages);
  } else {
    // Display the matched recipes
    matchedRecipes.forEach((recipe) => {
      const recipeCard = new RecipesFactory(recipe).generateElement();
      recipeSection.appendChild(recipeCard);
    });
  }
}

export function filteredRecipes() {
  let filteredRecipes = recipes;

  if (currentSearchQuery && currentSearchQuery.length >= 3) {
    filteredRecipes = searchRecipes(currentSearchQuery, filteredRecipes);
  }
  // Update the recipe section with the filtered recipes
  updateRecipeSection(filteredRecipes);
}
