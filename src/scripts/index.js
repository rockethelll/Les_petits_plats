import { recipes } from '../data/recipes.js';
import { RecipesFactory } from './factories/RecipesFactory.js';
import { searchRecipes } from './utils/mainFilter.js';
import { dropdownFilter } from './templates/DropdownFilter.js';
import {clearSearchDropdownFields, displayCleanIcon, resetMainFilter} from './utils/cleanInputSearch.js';
import { displayRecipesCount } from './utils/displayRecipesCount.js';
import {
  getAppareilsOptions,
  getIngredientsOptions,
  getUstensilsOptions,
} from './utils/getFilterItems.js';

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export const init = () => {
  displayRecipesCount();
  clearInputsFields();
  dropdownFilter();
  populateAllDropdowns();
};

function populateAllDropdowns() {
  getIngredientsOptions();
  getAppareilsOptions();
  getUstensilsOptions();
}

function clearInputsFields() {
  resetMainFilter();
  clearSearchDropdownFields([
    'dropdownSearchIngredients',
    'dropdownSearchUstensils',
    'dropdownSearchAppareils',
  ]);
}
