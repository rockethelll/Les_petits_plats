import { recipes } from '../data/recipes'
import Card from './templates/Card'
import filterByName from './utils/Filter'
import { cleanSearch, resetFilter } from './utils/cleanInputSearch'

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
