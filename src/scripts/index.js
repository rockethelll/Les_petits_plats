import { recipes } from '../data/recipes.js';
import { RecipesFactory } from './factories/RecipesFactory.js';
import { dropdownFilter } from './templates/DropdownFilter.js';
import { cleanSearch, resetFilter } from './utils/cleanInputSearch.js';

const btnReset = document.querySelector('.clean-search');
btnReset.addEventListener('click', resetFilter);

const ingredientsContainer = document.querySelector('.ingredients-container');
const ustensilsContainer = document.querySelector('.ustensils-container');

const init = async () => {
  resetFilter();
  cleanSearch();
  dropdownFilter();
  // filterByName(recipes)
  // createDropdown('Ingredients', getUniqueAndSortedIngredients(recipes), ingredientsContainer)
  // createDropdown('Appareils', getUniqueAndSortedAppliances(recipes), ustensilsContainer)
};

init();
