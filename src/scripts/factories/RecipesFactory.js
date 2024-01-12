import { recipes } from '../../data/recipes.js';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter.js';

export class RecipesFactory {
  constructor({
    id,
    image,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
  }) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }

  generateElement() {
    const $cardContainer = document.createElement('div');
    $cardContainer.classList.add('col-12', 'col-md-6', 'col-lg-4', 'd-flex');

    const $cardElement = document.createElement('div');
    $cardElement.classList.add('card');

    const $cardImage = document.createElement('img');
    $cardImage.src = `./assets/images/${this.image}`;
    $cardImage.classList.add('card-img-top');
    $cardImage.alt = this.name;

    const $badgeSpan = document.createElement('span');
    $badgeSpan.classList.add(
      'badge',
      'text-dark',
      'd-flex',
      'align-items-center',
      'justify-content-center',
    );
    $badgeSpan.textContent = `${this.time}min`;

    const $cardBody = document.createElement('div');
    $cardBody.classList.add('card-body');

    const $cardTitle = document.createElement('h3');
    $cardTitle.classList.add('card-title');
    $cardTitle.textContent = this.name;

    const $recetteP = document.createElement('p');
    $recetteP.classList.add('recette');
    $recetteP.textContent = 'RECETTE';

    const $cardText = document.createElement('p');
    $cardText.classList.add('card-text');
    $cardText.textContent = this.description;

    const $ingredientsP = document.createElement('p');
    $ingredientsP.classList.add('ingredients');
    $ingredientsP.textContent = 'INGRÉDIENTS';

    const $cardIngredients = document.createElement('div');
    $cardIngredients.classList.add('card-ingredients', 'row', 'row-cols-2');

    this.ingredients.forEach((ingredient) => {
      const $ingredientQuantity = document.createElement('div');
      $ingredientQuantity.classList.add('ingredient-quantity', 'col');

      const $ingredientNameP = document.createElement('p');
      $ingredientNameP.textContent = capitalizeFirstLetter(
        ingredient.ingredient,
      );

      const $quantityP = document.createElement('p');
      $quantityP.classList.add('quantity');
      $quantityP.textContent = `${
        ingredient.quantity ? ingredient.quantity : ''
      }${ingredient.unit ? ingredient.unit : ''}`;

      $ingredientQuantity.appendChild($ingredientNameP);
      $ingredientQuantity.appendChild($quantityP);
      $cardIngredients.appendChild($ingredientQuantity);
    });

    $cardBody.appendChild($cardTitle);
    $cardBody.appendChild($recetteP);
    $cardBody.appendChild($cardText);
    $cardBody.appendChild($ingredientsP);
    $cardBody.appendChild($cardIngredients);

    $cardElement.appendChild($cardImage);
    $cardElement.appendChild($badgeSpan);
    $cardElement.appendChild($cardBody);
    $cardContainer.appendChild($cardElement);

    return $cardContainer;
  }
}

const $gallerySection = document.querySelector('.recipes-gallery');
recipes.forEach((recipe) => {
  const card = new RecipesFactory(recipe);
  const $recipeCard = card.generateElement();
  $gallerySection.appendChild($recipeCard);
});
