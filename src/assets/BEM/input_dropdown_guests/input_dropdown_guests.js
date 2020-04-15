$(document).ready(function() {
  $('.js-input_dropdown_guests__button').click(function() {
    $(this).next().toggle('300');
  });

  $('.js-input_dropdown_guests__add_button').click(function() {
    const value = Number($(this).prev().text()) + 1;
    $(this).prev().text(value > 10 ? 10 : value);

    const container =  $(this).parent();
    if(value > 9) {
      $(this).addClass('disabled');
    }
    $(".js-input_dropdown_guests__substract_button", container).removeClass('disabled');


    const parent = $(this).parent().parent().parent();
    

    const values = $('.js-input_dropdown_guests__total', parent).each(function(index) {
      const value_of_option = Number(this.innerHTML);
      if(value_of_option > 0) {
        $('.js-input_dropdown_guests__button_reset', parent).removeClass('input_dropdown_guests__button_reset--hidden');
      }
    });
  })

  $('.js-input_dropdown_guests__substract_button').click(function() {
    const value = Number($(this).next().text()) - 1;
    
    $(this).next().text(value < 0 ? 0 : value);

    const container =  $(this).parent();
    if(value < 1) {
      $(this).addClass('disabled');
    }
    $(".js-input_dropdown_guests__add_button", container).removeClass('disabled');

    const parent = $(this).parent().parent().parent();
    
    

    let values_summary = ''; 
    const values = $('.js-input_dropdown_guests__total', parent).each(function(index) {
      values_summary += this.innerHTML;
      if(values_summary === '000') {
        $('.js-input_dropdown_guests__button_reset', parent).addClass('input_dropdown_guests__button_reset--hidden');
      }
    });
  });

  $('.js-input_dropdown_guests__button_reset').click(function() {
    const parent = $(this).parent().parent().parent();

    $('.js-input_dropdown_guests__input', parent).val('Сколько гостей');

    $('.js-input_dropdown_guests__total', parent).each(function(index) {
      this.innerHTML = 0;
    });

    $('.js-input_dropdown_guests__button_reset', parent).addClass('input_dropdown_guests__button_reset--hidden');
  });

  $('.js-input_dropdown_guests__button_apply').click(function() {
    const parent = $(this).parent().parent().parent();

    let values_summary = 0; 
    const values = $('.js-input_dropdown_guests__total', parent).each(function(index) {
      const value = Number(this.innerHTML);
      values_summary += value;
    });

    switch(values_summary) {
      case 1:
        values_summary += ' гость';
        break;
      case 2:
      case 3:
      case 4:
        values_summary += ' гостя';
        break;
      default:
        values_summary += ' гостей';
        break;
    }

    $('.js-input_dropdown_guests__input', parent).val(values_summary)
  });
});
