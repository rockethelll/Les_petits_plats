import { recipes } from '../data/recipes.js'
import filterByName from './utils/mainFilter.js'
import { cleanSearch, resetFilter } from './utils/cleanInputSearch.js'
import {getUniqueAndSortedAppliances, createDropdown, getUniqueAndSortedIngredients} from "./templates/filterByTag.js";

const btnReset = document.querySelector('.clean-search')
btnReset.addEventListener('click', resetFilter)

const ingredientsContainer = document.querySelector('.ingredients-container');
const ustensilsContainer = document.querySelector('.ustensils-container');

const init = async () => {
  resetFilter()
  cleanSearch()
  filterByName(recipes)
  // createDropdown('Ingredients', getUniqueAndSortedIngredients(recipes), ingredientsContainer)
  // createDropdown('Appareils', getUniqueAndSortedAppliances(recipes), ustensilsContainer)
}

init()
