export function dropdownFilter() {
  setupDropdownFilter('ingredients-filter');
  setupDropdownFilter('appareils-filter');
  setupDropdownFilter('ustensiles-filter');
}

// Change the chevron icon when the dropdown is open
function changeChevron($chevronUp, $chevronDown) {
  $chevronUp.classList.toggle('d-block');
  $chevronDown.classList.toggle('d-none');
}

// Set up the filter functionality for each dropdown
function setupDropdownFilter(buttonId) {
  const $dropdownBtn = document.getElementById(buttonId);
  const $chevronUp = $dropdownBtn.querySelector('.chevron-up');
  const $chevronDown = $dropdownBtn.querySelector('.chevron-down');
  const $dropDownSearch = $dropdownBtn
    .closest(
      '.filters__container__ingredients, .filters__container__appareils, .filters__container__ustensils',
    )
    .querySelector('.dropdown-search');

  // Add event listener to the dropdown button to open the dropdown
  $dropdownBtn.addEventListener('click', () => {
    changeChevron($chevronUp, $chevronDown);

    if ($dropDownSearch) {
      $dropDownSearch.classList.toggle('show');
    }
  });

  // Add event listener to the dropdown search to close it when the mouse leaves the dropdown
  $dropDownSearch?.addEventListener('mouseleave', () => {
    const $chevronUp = $dropdownBtn.querySelector('.chevron-up');
    const $chevronDown = $dropdownBtn.querySelector('.chevron-down');
    changeChevron($chevronUp, $chevronDown);
    $dropDownSearch.classList.toggle('show');
  });
}
