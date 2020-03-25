$(document).ready(function() {
  $('.dropdown_room_quantity__button').click(function() {
    $(this).next().toggle('300');
  });

  $('.dropdown_room_quantity__add_button').click(function() {
    const value = Number($(this).prev().text()) + 1;
    $(this).prev().text(value > 10 ? 10 : value);

    const parent = $(this).parent().parent().parent();
    const component_root = parent.parent();

    let input_value = '';
    const buttons = $('.dropdown_room_quantity__control_buttons', parent).each(function(index) {
      const name_of_option = $('.dropdown_room_quantity__property' ,this).text();
      const value_of_option = $('.dropdown_room_quantity__total', this).text();

      input_value += `${value_of_option} ${name_of_option}, `;
    });

    const input_value_lengt = input_value.length;
    $('.dropdown_room_quantity__input', component_root).val(input_value);
  })

  $('.dropdown_room_quantity__substract_button').click(function() {
    const value = Number($(this).next().text()) - 1;
    
    $(this).next().text(value < 0 ? 0 : value);


    const parent = $(this).parent().parent().parent();
    const component_root = parent.parent();

    let input_value = '';
    const buttons = $('.dropdown_room_quantity__control_buttons', parent).each(function(index) {
      const name_of_option = $('.dropdown_room_quantity__property' ,this).text();
      const value_of_option = $('.dropdown_room_quantity__total', this).text();

      input_value += `${value_of_option} ${name_of_option}, `;
    });

    $('.dropdown_room_quantity__input', component_root).val(input_value);
  })


})