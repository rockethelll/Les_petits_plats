import { recipes } from '../data/recipes.js'
import Card from './templates/Card.js'
import filterByName from './utils/mainFilter.js'
import { cleanSearch, resetFilter } from './utils/cleanInputSearch.js'
import {getUniqueAndSortedAppliances, createDropdown, getUniqueAndSortedIngredients} from "./templates/filterByTag.js";

const btnReset = document.querySelector('.clean-search')
btnReset.addEventListener('click', resetFilter)

const gallerySection = document.querySelector('.gallery')

const ingredientsContainer = document.querySelector('.ingredients-container');
const ustensilsContainer = document.querySelector('.ustensils-container');


export async function displayCard (data) {
  gallerySection.innerHTML = ''

  data.forEach((item) => {
    const card = new Card(item)
    const cardElement = card.generateElement()

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('col-12', 'col-md-6', 'col-lg-4', 'd-flex')
    cardContainer.appendChild(cardElement)

    gallerySection.appendChild(cardContainer)
  })
}

const init = async () => {
  resetFilter()
  displayCard(recipes)
  cleanSearch()
  filterByName(recipes)
  createDropdown('Ingredients', getUniqueAndSortedIngredients(recipes), ingredientsContainer)
  createDropdown('Appareils', getUniqueAndSortedAppliances(recipes), ustensilsContainer)
}

init()
