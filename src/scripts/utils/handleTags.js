import { searchByTags } from './searchTag.js';
import {updateListElement} from "./handleDropdown.js";
import {updateRecipeSection} from "./mainFilter.js";
import {recipes} from "../../data/recipes.js";

const addedTags = new Set();

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
  $tag.addEventListener('click', () => {
    removeTag($tag, content, type);
  })

  console.log('addedTags', addedTags);
}


export function removeTag(tag, content, type) {
  tag.remove();
  addedTags.delete(content);
  updateListElement();
  updateRecipeSection(recipes);
  searchByTags();
  console.log('addedTags', addedTags);

}