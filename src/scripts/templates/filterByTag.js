export function createDropdown(name, items, container) {
  // Create dropdown element
  const dropdown = document.createElement('div');
  dropdown.classList.add('handle-dropdown');

  // Create button element
  const button = document.createElement('button');
  button.classList.add('dropdown__button');
  button.type = 'button';
  button.textContent = name;
  dropdown.appendChild(button);

  // Create chevron-up and chevron-down images
  const chevronUp = document.createElement('img');
  chevronUp.classList.add('chevron-up');
  chevronUp.src = './assets/icons/chevron-up-solid.svg';
  chevronUp.alt = 'chevron up';
  button.appendChild(chevronUp);

  const chevronDown = document.createElement('img');
  chevronDown.classList.add('chevron-down');
  chevronDown.src = './assets/icons/chevron-down-solid.svg';
  chevronDown.alt = 'chevron down';
  button.appendChild(chevronDown);

  // Create ul element for dropdown items
  const ul = document.createElement('ul');
  ul.classList.add('dropdown-items');

  // Create dropdown search input
  const searchLi = document.createElement('li');
  const searchDiv = document.createElement('div');
  searchDiv.classList.add('dropdown-search');
  searchLi.appendChild(searchDiv);

  const label = document.createElement('label');
  label.setAttribute('for', 'dropdownSearch');
  searchDiv.appendChild(label);

  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'search');
  searchInput.setAttribute('id', 'dropdownSearch');
  searchInput.setAttribute('placeholder', 'Rechercher');
  searchDiv.appendChild(searchInput);

  const cleanIcon = document.createElement('img');
  cleanIcon.classList.add('clean-icon');
  cleanIcon.src = './assets/icons/close.svg';
  cleanIcon.alt = 'Clean search field';
  searchDiv.appendChild(cleanIcon);

  const searchIcon = document.createElement('img');
  searchIcon.classList.add('search-icon');
  searchIcon.src = './assets/icons/search.svg';
  searchIcon.alt = 'Search icon';
  searchDiv.appendChild(searchIcon);

  ul.appendChild(searchLi);

  // Create li elements for each item in the list
  items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('dropdown-item');
    a.href = '#';
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
  });

  dropdown.appendChild(ul);

  container.appendChild(dropdown);
}

// Get all ingredients from all recipes and remove duplicates and sort them alphabetically
export function getUniqueAndSortedIngredients(recipes) {
  const uniqueIngredients = [...new Set([].concat(...recipes.map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient))))].reduce((acc, ingredient) => {
    const capitalizedIngredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
    if (!acc.includes(capitalizedIngredient)) {
      acc.push(capitalizedIngredient);
    }
    return acc;
  }, []);

  return uniqueIngredients.slice().sort();
}

// Get all ustensils from all recipes and remove duplicates and sort them alphabetically
export function getUniqueAndSortedAppliances(recipes) {
  const uniqueAppliances = [...new Set([].concat(...recipes.map(recipe => recipe.appliance)))].reduce((acc, appliance) => {
    const capitalizedAppliance = appliance.charAt(0).toUpperCase() + appliance.slice(1);
    if (!acc.includes(capitalizedAppliance)) {
      acc.push(capitalizedAppliance);
    }
    return acc;
  }, []);

  return uniqueAppliances.slice().sort();
}