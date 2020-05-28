$(document).ready(function() {
  $('.masked-text-field-datepicker').datepicker({
    clearButton: true,
    range: false,
    //inline: true,
    minDate: new Date(),
    navTitles: {
      days: 'MM yyyy',
    },
  });

  $('.masked-text-field-datepicker').focus(function(e) { 
    
  })
})



