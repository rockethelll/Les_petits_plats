export function dropdownFilter() {
  setupDropdownFilter('ingredients-filter');
  setupDropdownFilter('appareils-filter');
  setupDropdownFilter('ustensiles-filter');
}

function changeChevron(chevronUp, chevronDown) {
  chevronUp.classList.toggle('d-block');
  chevronDown.classList.toggle('d-none');
}

function setupDropdownFilter(buttonId) {
  const dropdownBtn = document.getElementById(buttonId);
  const chevronUp = dropdownBtn.querySelector('.chevron-up');
  const chevronDown = dropdownBtn.querySelector('.chevron-down');

  dropdownBtn.addEventListener('click', () => {
    console.log(`click ${buttonId.replace('-filter', '')}`);
    changeChevron(chevronUp, chevronDown);

    const dropdown = dropdownBtn
      .closest(
        '.filters__container__ingredients, .filters__container__appareils, .filters__container__ustensils',
      )
      .querySelector('.dropdown-search');

    if (dropdown) {
      dropdown.classList.toggle('show');
    }
  });
}
