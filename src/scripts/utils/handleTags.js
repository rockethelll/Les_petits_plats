import { searchByTags } from './searchTag.js';
import { updateListElement } from './handleDropdown.js';
import { updateRecipeSection } from './mainFilter.js';
import { recipes } from '../../data/recipes.js';

const addedTags = new Set();
let selectedTags = { ingredient: [], appliance: [], ustensil: [] };

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-items').forEach((li) => {
    li.addEventListener('click', (event) => {
      const li = event.target;
      const type = li.dataset.type;
      if (li.tagName === 'LI' && !li.classList.contains('selected')) {
        addTag(li.textContent, type);
        searchByTags();
      }
    });
  });
});

export function addTag(content, type) {
  // Exit the function if the tag is already added
  if (addedTags.has(content)) {
    return;
  }

  // Create the tag element
  const $tagContainer = document.querySelector('.tag-container');
  const $tag = document.createElement('div');
  $tag.classList.add('tag');
  const $tagContent = document.createElement('p');
  $tagContent.textContent = content;
  addedTags.add(content);
  const $closetBtn = document.createElement('img');
  $closetBtn.src = './assets/icons/close.svg';
  $tag.appendChild($tagContent);
  $tag.appendChild($closetBtn);
  $tagContainer.appendChild($tag);

  $tag.dataset.type = type;

  // Add an event listener to the tag for removing it
  $tag.addEventListener('click', () => {
    removeTag($tag, content, type);
  });
  // Add the tag content to the appropriate array in the 'selectedTags' object
  selectedTags[type].push(content.toLowerCase());
}

export function removeTag(tag, content, type) {
  tag.remove();
  addedTags.delete(content);

  const index = selectedTags[type].indexOf(content.toLowerCase());
  if (index > -1) {
    selectedTags[type].splice(index, 1);
  }

  updateListElement();
  updateRecipeSection(recipes);
  searchByTags();
}

document.addEventListener('DOMContentLoaded', () => {
  // Set up the filter functionality for each dropdown
  setupDropdownFilter('dropdownSearchIngredients', 'ingredients-list');
  setupDropdownFilter('dropdownSearchUstensils', 'ustensiles-list');
  setupDropdownFilter('dropdownSearchAppareils', 'appareils-list');
});

// Function to enable live search for dropdown lists
export function setupDropdownFilter(inputId, listId) {
  const searchInput = document.getElementById(inputId);
  const itemList = document.getElementById(listId);
  // Add an 'input' event listener to the search field
  searchInput.addEventListener('input', () => {
    // Get the search query, trimmed and in lower case
    const query = searchInput.value.trim().toLowerCase();

    // For each list item in the dropdown
    Array.from(itemList.children).forEach((li) => {
      // Text content of the list item, trimmed and in lower case
      const itemText = li.textContent.trim().toLowerCase();
      const isVisible = itemText.includes(query);

      // If the item should be visible, reset the display style, else hide it.
      li.style.display = isVisible ? '' : 'none';
    });
  });
}
