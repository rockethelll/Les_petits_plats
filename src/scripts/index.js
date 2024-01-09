import { recipes } from '../data/recipes.js';
import { RecipesFactory } from './factories/RecipesFactory.js';
import { searchRecipes } from './utils/mainFilter.js';
import { dropdownFilter } from './templates/DropdownFilter.js';
import { displayCleanIcon, resetMainFilter } from './utils/cleanInputSearch.js';
import { displayRecipesCount } from './utils/displayRecipesCount.js';

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export const init = () => {
  displayRecipesCount();
  resetMainFilter();
  dropdownFilter();
};
