$(document).ready(function() {
  $('.input_filter_date_dropdown__input').datepicker({
    clearButton: true,
    range: true,
    inline: false,
    minDate: new Date(),
    multipleDates: true,
    dateFormat: 'd M',
    multipleDatesSeparator: ' - ',
    navTitles: {
      days: 'MM yyyy',
    },
   });

   
})

