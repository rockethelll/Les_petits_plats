import { recipes } from "../data/recipes.min.js";
import { RecipesFactory } from "./factories/RecipesFactory.min.js";
import { searchRecipes } from "./utils/mainFilter.min.js";
import { dropdownFilter } from "./templates/DropdownFilter.min.js";
import {
  clearSearchDropdownFields,
  displayCleanIcon,
  resetMainFilter,
} from "./utils/cleanInputSearch.min.js";
import { displayRecipesCount } from "./utils/displayRecipesCount.min.js";
import {
  getAppareilsOptions,
  getIngredientsOptions,
  getUstensilsOptions,
} from "./utils/getFilterItems.min.js";
import {} from "./utils/handleTags.min.js";

document.addEventListener("DOMContentLoaded", () => {
  init();
});

export const init = () => {
  displayRecipesCount();
  clearInputsFields();
  dropdownFilter();
  populateAllDropdowns();
};

export function populateAllDropdowns() {
  getIngredientsOptions();
  getAppareilsOptions();
  getUstensilsOptions();
}

function clearInputsFields() {
  resetMainFilter();
  clearSearchDropdownFields([
    "dropdownSearchIngredients",
    "dropdownSearchUstensils",
    "dropdownSearchAppareils",
  ]);
}
