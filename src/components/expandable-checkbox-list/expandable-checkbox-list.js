$(document).ready(function() {
  $('.js-expandable-checkbox-list__button-open').click(function() {
    const component_root = $(this).parent().parent();
    $(this).toggleClass('expandable-checkbox-list__button-open_opened');
    $('.js-expandable-checkbox-list__list', component_root).toggle(300);
  })
});