import Card from '../templates/Card.js'

export const createTotalElement = (count) => {
  const total = document.createElement('h2')
  total.classList.add('total-recipes')
  count <= 1
    ? total.textContent = `${count} recette`
    : total.textContent = `${count} recettes`
  return total
}

export const updateTotalRecipes = (count, filtersSection) => {
  const existingTotal = filtersSection.querySelector('.total-recipes')
  if (existingTotal) {
    filtersSection.removeChild(existingTotal)
  }
  filtersSection.appendChild(createTotalElement(count))
}

export default function filterByName (recipes) {
  const inputSearch = document.getElementById('search')
  const gallerySection = document.querySelector('.gallery')
  const filtersSection = document.querySelector('.filters')

  const isMatch = (recipe, searchTerm) => {
    const isInName = recipe.name.toLowerCase().includes(searchTerm)
    const isInIngredients = recipe.ingredients.some(
      (ingredient) => ingredient.ingredient.toLowerCase().includes(searchTerm)
    )
    const isInDescription = recipe.description.toLowerCase().includes(searchTerm)

    return isInName || isInIngredients || isInDescription
  }

  const displayCard = (data) => {
    data.forEach((item) => {
      const card = new Card(item)
      const cardElement = card.generateElement()

      const cardContainer = document.createElement('div')
      cardContainer.classList.add('col-auto', 'd-flex', 'justify-content-between')
      cardContainer.appendChild(cardElement)

      gallerySection.appendChild(cardContainer)
    })
  }

  const handleSearchInput = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase()

    const filteredRecipes = searchTerm.length >= 3
      ? recipes.filter((recipe) => isMatch(recipe, searchTerm))
      : recipes

    // Remove all cards from the gallery
    gallerySection.innerHTML = ''

    if (filteredRecipes.length === 0) {
      const noResult = document.createElement('div')
      noResult.classList.add('no-result')
      noResult.textContent = 'Aucune recette ne correspond à votre critère… vous pouvez rechercher « tarte aux pommes' +
        ' », « poisson », etc.'
      gallerySection.appendChild(noResult)
    } else {
      // Display sorted recipes
      displayCard(filteredRecipes)
    }

    // Update the total recipes count
    updateTotalRecipes(filteredRecipes.length, filtersSection)
  }

  inputSearch.addEventListener('input', handleSearchInput)
  updateTotalRecipes(recipes.length, filtersSection)
}

// function filterByName2(recipes, name) {
//   const filteredRecipes = [];
//
//   recipes.forEach((recipe) => {
//     if (recipe.name.toLowerCase().includes(name.toLowerCase())) {
//       filteredRecipes.push(recipe);
//     }
//   });
//
//   return filteredRecipes;
// }

// Exemple d'utilisation
// const filteredRecipes2 = filterByName2(recipes, "coco");
// console.log(filteredRecipes2);
