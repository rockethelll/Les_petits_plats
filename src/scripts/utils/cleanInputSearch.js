import { updateTotalRecipes } from './mainFilter.js'
import { recipes } from '../../data/recipes.js'
import { displayCard } from '../index.js'

const inputSearch = document.getElementById('search')
const cleanSearchBtn = document.querySelector('.clean-search')
const filtersSection = document.querySelector('.filters')
const existingTotal = filtersSection.querySelector('.total-recipes')

export const resetFilter = () => {
  inputSearch.value = ''
  updateTotalRecipes(recipes.length, filtersSection)
  cleanSearchBtn.style.display = 'none'
  existingTotal.textContent = `${recipes.length} recettes`
  displayCard(recipes)
}

export const cleanSearch = () => {
  const displayCleanSearch = () => {
    cleanSearchBtn.style.display = 'block'
  }

  inputSearch.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
      displayCleanSearch()
    } else {
      cleanSearchBtn.style.display = 'none'
    }
  })
}
