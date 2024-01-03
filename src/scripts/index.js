import { recipes } from '../data/recipes.js'
import Card from './templates/Card.js'
import filterByName from './utils/Filter.js'
import { cleanSearch, resetFilter } from './utils/cleanInputSearch.js'

const btnReset = document.querySelector('.clean-search')
btnReset.addEventListener('click', resetFilter)

const gallerySection = document.querySelector('.gallery')

export async function displayCard (data) {
  gallerySection.innerHTML = ''

  data.forEach((item) => {
    const card = new Card(item)
    const cardElement = card.generateElement()

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('col-auto', 'd-flex', 'justify-content-between')
    cardContainer.appendChild(cardElement)

    gallerySection.appendChild(cardContainer)
  })
}

const init = async () => {
  resetFilter()
  displayCard(recipes)
  cleanSearch()
  filterByName(recipes)
}

init()
