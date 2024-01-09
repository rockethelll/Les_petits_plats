export function displayRecipesCount() {
  const $recipesNumber = document.querySelector('.total-recipes');

  // Select all .card elements displayed in the reicpes-gallery
  const $allRecipesDisplayed = document.querySelectorAll('.card');

  switch ($allRecipesDisplayed.length) {
    case 0:
      $recipesNumber.textContent = '0 recette';
      break;
    case 1:
      $recipesNumber.textContent = '1 recette';
      break;
    default:
      $recipesNumber.textContent = $allRecipesDisplayed.length + ' recettes';
      break;
  }
}
