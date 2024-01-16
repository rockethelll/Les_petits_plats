import { recipes } from "../../data/recipes.min.js";
import { applyFilters } from "./mainFilter.min.js";

export let filteredRecipesState = {
  filteredRecipesByTags: [],
};

// filter recipes based on selected tags
export function searchByTags() {
  let $selectedTags = document.querySelectorAll(".tag");
  let recipesToDisplay = [];

  if ($selectedTags.length === 0) {
    filteredRecipesState.filteredRecipesByTags = recipes;
    applyFilters();
    return recipes;
  }

  // Iterate over each recipe
  recipes.forEach((recipe) => {
    let allTagsFound = true;

    // Check each selected tag to see if it is found in the current recipe
    $selectedTags.forEach((selectedTag) => {
      let tagType = selectedTag.dataset.type;
      let tagValue = selectedTag.textContent.trim().toLowerCase();

      switch (tagType) {
        case "ingredient": {
          let ingredientNames = recipe.ingredients.map((ing) =>
            ing.ingredient.trim().toLowerCase()
          );
          if (!ingredientNames.includes(tagValue)) allTagsFound = false;
          break;
        }
        case "appliance": {
          if (recipe.appliance.trim().toLowerCase() !== tagValue) {
            allTagsFound = false;
          }
          break;
        }
        case "ustensil": {
          let isUstensilFound = recipe.ustensils.some(
            (ustensil) => ustensil.trim().toLowerCase() === tagValue
          );
          if (!isUstensilFound) allTagsFound = false;
          break;
        }
      }
    });

    // If all tags are found, add the recipe to the list of recipes to display
    if (allTagsFound) {
      recipesToDisplay.push(recipe);
    }
  });
  // Update the filtered recipes state
  filteredRecipesState.filteredRecipesByTags = recipesToDisplay;

  // Apply the filters
  applyFilters();

  return recipesToDisplay;
}
