$(document).ready(function() {
  $('.js-dropdown_room_quantity__button').click(function() {
    $(this).next().toggle('300');
  });

  $('.js-dropdown_room_quantity__add_button').click(function() {
    const value = Number($(this).prev().text()) + 1;
    $(this).prev().text(value > 10 ? 10 : value);

    const container =  $(this).parent();
    if(value > 9) {
      $(this).addClass('disabled');
    }
    $(".js-dropdown_room_quantity__substract_button", container).removeClass('disabled');


    const parent = $(this).parent().parent().parent();
    const component_root = parent.parent();



    let input_value = '';
    const buttons = $('.js-dropdown_room_quantity__control_buttons', parent).each(function(index) {
      const name_of_option = $('.js-dropdown_room_quantity__property' ,this).text();
      const value_of_option = $('.js-dropdown_room_quantity__total', this).text();

      input_value += `${value_of_option} ${name_of_option}, `;
    });

    const input_value_lengt = input_value.length;
    $('.js-dropdown_room_quantity__input', component_root).val(input_value);
  })

  $('.js-dropdown_room_quantity__substract_button').click(function() {
    const value = Number($(this).next().text()) - 1;
    
    $(this).next().text(value < 0 ? 0 : value);
    
    const container = $(this).parent();

    if(value < 1) {
      $(this).addClass('disabled');
    }
    $(".js-dropdown_room_quantity__add_button", container).removeClass('disabled');
    
    const parent = $(this).parent().parent().parent();
    const component_root = parent.parent();

    

    let input_value = '';
    const buttons = $('.js-dropdown_room_quantity__control_buttons', parent).each(function(index) {
      const name_of_option = $('.js-dropdown_room_quantity__property' ,this).text();
      const value_of_option = $('.js-dropdown_room_quantity__total', this).text();

      input_value += `${value_of_option} ${name_of_option}, `;
    });

    $('.js-dropdown_room_quantity__input', component_root).val(input_value);
  })


})