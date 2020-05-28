$(document).ready(function() {
  $('#input_filter_date_dropdown--calendar').datepicker({
    clearButton: true,
    range: true,
    inline: true,
    minDate: new Date(),
    multipleDates: true,
    dateFormat: 'd M',
    multipleDatesSeparator: ' - ',
    navTitles: {
      days: 'MM yyyy',
    },

    onSelect: function (fd, d, picker) { 
      const sibling =  $('#input_filter_date_dropdown--calendar').prev();
      const input = $('.input_filter_date_dropdown__input', sibling);

      input.val(fd);
    }
  })

  console.log('worked')
  
  $('#input_filter_date_dropdown--calendar').hide();

  const parent = $('#input_filter_date_dropdown--calendar');
  $('.datepicker--buttons', parent).append("<span class='datepicker--pseudo-button'> Применить </span>")
  $('.datepicker--pseudo-button', parent).click(() => {
    $('#input_filter_date_dropdown--calendar').hide();
  })

  const sibling =  $('#input_filter_date_dropdown--calendar').prev();

  $('.input_filter_date_dropdown__button' , sibling).click(() => {
    console.log('sparta')
    $('#input_filter_date_dropdown--calendar').show();
  })

  $('.input_filter_date_dropdown__input', sibling).keydown(() => {
    return false
  })

});
