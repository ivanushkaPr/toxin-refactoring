$(document).ready(function() {
  $('.js-expandable_checkbox_list__button-open').click(function() {
    const component_root = $(this).parent().parent();
    $(this).toggleClass('expandable_checkbox_list__button-open--opened');
    $('.js-expandable_checkbox_list__list', component_root).toggle(300);
  })
});