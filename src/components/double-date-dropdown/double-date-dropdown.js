$(document).ready(function () {
  const id = {
    first: {
      id: '#calendar-start',
      firstInput: '#start',
      secondInput: '#end'
    }, second: {
      id: '#calendar-start-2',
      firstInput: '#start-2',
      secondInput: '#end-2'
    }
  }

  for(let key in id) {
    $(id[key]['id']).datepicker({ 
      range: true,
      clearButton: true,
      
      inline: false,
      minDate: new Date(),
      navTitles: {
        days: 'MM yyyy',
      },
     
      onSelect: function (fd, d, picker) { 
        console.log(fd);
        const start = fd.split(",")[0];
        const end = fd.split(",")[1];
        $(id[key]['firstInput']).val(fd.split(",")[0]);
        $(id[key]['secondInput']).val(fd.split(",")[1]);
      }
    });
    
    $(id[key]['id']).hide();
    let data = $(id[key]['id']).datepicker().data('datepicker');
    
    

    const parent = $(id[key]['id']);

    $('.datepicker--buttons', parent).append("<span class='datepicker--pseudo-button'> Применить </span>")


    $('.datepicker--pseudo-button', parent).click(() => {
      $(id[key]['id']).hide();
    })

    const prev = $(id[key]['id']).prev();
    
    $('.input_date_dropdown__button', prev).click(function() {
      const calendar = data.el;

      const isShowed = calendar.classList.contains('calendar-show');
      
      const show = () => {
        calendar.classList.toggle('calendar-show');
        $(id[key]['id']).show();
      };
  
      const hide = () => {
        calendar.classList.toggle('calendar-show');
        $(id[key]['id']).hide()
      }

      isShowed ? hide() : show();
    })

    $('.input_date_dropdown__input', prev).keydown(() => {
      return false
    })
  }
 })
 