document.addEventListener('DOMContentLoaded', function() {

  function onCheckboxChangeHandler(e) {
    let parent = e.target.parentNode.parentNode;
    let checkboxes = parent.querySelectorAll('.js-rate-button__checkbox');
    let ar = Array.from(checkboxes);
    let number = e.target.name;
    

    checkboxes.forEach((element, index) => {
      if(index < number && !element.classList.contains('rate-button__sprite--checkbox-checked')) {
        element.nextElementSibling.children[0].classList.add('rate-button__sprite--checkbox-checked');
      }
      else {
        element.nextElementSibling.children[0].classList.remove('rate-button__sprite--checkbox-checked');
      }
    });

    parent.querySelector('.js-rate-button__counter').value = number;
  }

  let checkboxes = document.querySelectorAll('.js-rate-button__checkbox')

  let checkboxesAr = Array.from(checkboxes);

  checkboxesAr.forEach((checkbox) => {
    checkbox.addEventListener('change', onCheckboxChangeHandler);
  });
});