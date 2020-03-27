// form elements
// form elements masked text field date picker

$(document).ready(function() {
  $('.masked-text-field-datepicker').datepicker({
    clearButton: true,
    range: false,
    inline: true,
    navTitles: {
      days: 'MM yyyy',
    },
  });

  $('.masked-text-field-datepicker').focus(function(e) { 
    
  })
  

  
  
})


//


// search_room component datepicker
$(document).ready(function() {
  let firstData;
  let secondData;

  $('.datepick-start').datepicker({

  navTitles: {
    days: 'MM yyyy',
  },
  startDate: new Date('august 2019'),  
    range: true,
    clearButton: true,
    doButton: true,
    inline:true,
    onSelect: function (fd, d, picker) { 
      firstData = fd.split(",")[0];
      secondData = fd.split(",")[1];

      $(".datepick-start").val(firstData);
      $(".datepick-end").val(secondData);
    },
  });

  $('.datepick-start').focus(function(e) { 
    $(this).next().css({position: 'static', left: '0px'})
  })


  $('.datepick-start .datepicker--buttons').append('<span class="datepicker--button datepicker--button--purple" data-action="do">Применить</span>');
  $('.datepick-start .datepicker--buttons .datepicker--button--purple').click(function(e) {

    const calendar = $(this).parent().parent().parent();
    calendar.css({position: 'absolute', left: '-10000px'})
    console.log(calendar)
  })
});

