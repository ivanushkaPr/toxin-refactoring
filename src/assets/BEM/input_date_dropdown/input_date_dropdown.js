$(document).ready(function() {
  $('.datepick').datepicker({
  inline: true,
  navTitles: {
    days: 'MM yyyy',
  },
  startDate: new Date('august 2019'),  
    range: true,
    clearButton: true,
    doButton: true,
  });

  $('.datepicker--button[data-action="do"]').text('Применить');

  
  

  
});
