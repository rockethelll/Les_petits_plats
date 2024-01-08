import { recipes } from '../../data/recipes.js';

const inputSearch = document.getElementById('main-search');
const cleanSearchBtn = document.querySelector('.clean-search');
const filtersSection = document.querySelector('.filters');

export const resetFilter = () => {
  inputSearch.value = '';
  // updateTotalRecipes(recipes.length, filtersSection)
  cleanSearchBtn.style.display = 'none';
};

export const cleanSearch = () => {
  const displayCleanSearch = () => {
    cleanSearchBtn.style.display = 'block';
  };

  inputSearch.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
      displayCleanSearch();
    } else {
      cleanSearchBtn.style.display = 'none';
    }
  });
};
