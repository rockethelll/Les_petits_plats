import { displayRecipesCount } from './displayRecipesCount.js';
import { updateRecipeSection } from './mainFilter.js';
import { recipes } from '../../data/recipes.js';

const $inputSearch = document.getElementById('main-search');
const $clearInputBtn = document.querySelector('.clean-search');

export const resetMainFilter = () => {
  $clearInputBtn.style.visibility = 'hidden';
  $inputSearch.value = '';
};

export const displayCleanIcon = () => {
  $inputSearch.addEventListener('input', (e) => {
    if (e.target.value) {
      $clearInputBtn.style.visibility = 'visible';
    } else {
      $clearInputBtn.style.visibility = 'hidden';
    }
  });
};

$clearInputBtn.addEventListener('click', () => {
  resetMainFilter();
  updateRecipeSection(recipes);
  displayRecipesCount();
});

export function clearSearchDropdownFields(inputIds) {
  inputIds.forEach((id) => {
    const $inputElement = document.getElementById(id);
    if ($inputElement) {
      $inputElement.value = '';
    }
  });
}
