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

  var startDate = new Date('August 19');
  var endDate = new Date('August 23'); 

  if($('.input_filter_date_dropdown__input').length !== 0) {
  var datepicker = $('.input_filter_date_dropdown__input').datepicker().data('datepicker');
  datepicker.selectDate(startDate);
  datepicker.selectDate(endDate);
  }


})

