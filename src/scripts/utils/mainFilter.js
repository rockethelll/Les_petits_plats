import { recipes } from "../../data/recipes.min.js";
import { RecipesFactory } from "../factories/RecipesFactory.min.js";
import { displayRecipesCount } from "./displayRecipesCount.min.js";
import { displayCleanIcon } from "./cleanInputSearch.min.js";
import { updateListOptions } from "./handleDropdown.min.js";
import { filteredRecipesState } from "./searchTag.min.js";
import { searchByTags } from "./searchTag.min.js";

export let currentSearchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  const $mainSearch = document.getElementById("main-search");
  const $tagContainer = document.querySelector(".tag-container");
  $mainSearch.addEventListener("input", () => {
    currentSearchQuery = $mainSearch.value.trim().toLowerCase();
    applyFilters();
  });

  // Add event listener to the tag container to listen for changes
  $tagContainer.addEventListener("change", () => {
    // Update the filtered recipes by tags
    let filteredRecipes = searchByTags();
    if (filteredRecipes) {
      filteredRecipesState.filteredRecipesByTags = filteredRecipes;
    }

    // Check if the search query is valid
    if (currentSearchQuery && currentSearchQuery.length >= 3) {
      // Apply the search query to the filtered recipes
      filteredRecipes = searchRecipes(currentSearchQuery, filteredRecipes);
    }

    // Update the recipe section with the filtered recipes
    updateRecipeSection(filteredRecipes);
  });
});

// Search recipes by name, ingredients, or description
export function searchRecipes(query, recipesToFilter = recipes) {
  const searchTerms = query.toLowerCase().split(" ");
  const matchedRecipes = [];

  for (let i = 0; i < recipesToFilter.length; i++) {
    const recipe = recipesToFilter[i];
    const searchableText = `${recipe.name.toLowerCase()} ${recipe.description.toLowerCase()} ${recipe.ingredients
      .map((ingredient) => ingredient.ingredient.toLowerCase())
      .join(" ")}`;

    if (searchTerms.every((term) => searchableText.includes(term))) {
      matchedRecipes.push(recipe);
    }
  }

  return matchedRecipes;
}

// Update the recipe section with the matched recipes
export function updateRecipeSection(matchedRecipes) {
  if (!matchedRecipes) {
    console.error("matchedRecipes is undefined");
  }
  const $recipeSection = document.querySelector(".recipes-gallery");
  $recipeSection.textContent = "";

  //Display message if no recipe is found
  if (matchedRecipes.length === 0) {
    const $errorMessages = document.createElement("div");
    $errorMessages.classList.add("error-message");
    $errorMessages.textContent =
      "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.";
    $recipeSection.appendChild($errorMessages);
  } else {
    // Display the matched recipes
    matchedRecipes.forEach((recipe) => {
      const recipeCard = new RecipesFactory(recipe).generateElement();
      $recipeSection.appendChild(recipeCard);
    });
  }
  displayRecipesCount(matchedRecipes);
  updateListOptions(matchedRecipes);
}

export function applyFilters() {
  let recipesToDisplay = recipes;

  // First apply the tag filter if necessary
  if (filteredRecipesState.filteredRecipesByTags.length > 0) {
    recipesToDisplay = filteredRecipesState.filteredRecipesByTags;
  }

  if (currentSearchQuery && currentSearchQuery.length > 0) {
    displayCleanIcon();
  }
  if (currentSearchQuery && currentSearchQuery.length >= 3) {
    recipesToDisplay = searchRecipes(currentSearchQuery, recipesToDisplay);
  }
  // Update the recipe section with the filtered recipes
  updateRecipeSection(recipesToDisplay);
}
