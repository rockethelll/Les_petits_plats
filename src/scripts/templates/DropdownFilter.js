const dropdownBtn = document.getElementById('dropdown-button')
const dropdown = document.querySelector('.dropdown')

dropdownBtn.addEventListener('click', () => {
  const chevronUp = document.querySelector('.chevron-up')
  const chevronDown = document.querySelector('.chevron-down')
  chevronUp.classList.toggle('d-block')
  chevronDown.classList.toggle('d-none')
  dropdown.classList.toggle('show')
})
