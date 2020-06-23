$(document).ready(function() {
  $('#input-filter-date-dropdown-calendar').datepicker({
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
      const sibling =  $('#input-filter-date-dropdown-calendar').prev();
      const input = $('.input-filter-date-dropdown__input', sibling);

      input.val(fd);
    }
  })

  console.log('worked')
  
  $('#input-filter-date-dropdown-calendar').hide();

  const parent = $('#input-filter-date-dropdown-calendar');
  $('.datepicker--buttons', parent).append("<span class='datepicker--pseudo-button'> Применить </span>")
  $('.datepicker--pseudo-button', parent).click(() => {
    $('#input-filter-date-dropdown-calendar').hide();
  })

  const sibling =  $('#input-filter-date-dropdown-calendar').prev();
  console.log(sibling);

  $('.input-filter-date-dropdown__button' , sibling).click(() => {
    console.log('show')
    $('#input-filter-date-dropdown-calendar').show();
  })

  $('.input-filter-date-dropdown__input', sibling).keydown(() => {
    return false
  })

});
