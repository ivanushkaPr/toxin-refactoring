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

class DoubleDateDropdown {
  constructor(parentId, startId, endId) {
    this.parentId = parentId;
    this.startId = startId;
    this.endId = endId;

    $(parentId).datepicker({ 
      range: true,
      clearButton: true,
      
      inline: true,
      minDate: new Date(),
      navTitles: {
        days: 'MM yyyy',
      },
     
      onSelect: function (fd, d, picker) { 
        const start = fd.split(",")[0];
        const end = fd.split(",")[1];
        $(startId).val(fd.split(",")[0]);
        $(endId).val(fd.split(",")[1]);
      }
    });
    this.createApplyButton();
    this.buttonClickHandler();
  // this.hide();
    this.cacheDatepicker();
  }

  cacheDatepicker() {
    this.datepicker = $(this.parentId).datepicker().data('datepicker').el;
  }

  createApplyButton() {
    const parent = $(this.parentId);
    $('.datepicker--buttons', parent).append("<span class='datepicker--pseudo-button'> Применить </span>");
    $('.datepicker--pseudo-button', parent).click(() => {
      $(this.parentId).hide();
    })
  }

  hide() { 
    this.datepicker.classList.toggle('calendar-closed');
    $(this.parentId).hide();
  }

  show() {
    this.datepicker.classList.toggle('calendar-closed');
    $(this.parentId).show();
  }

  toggleDatepicker() {
    const calendar = this.datepicker;
    const isShowed = !calendar.classList.contains('calendar-closed');
    isShowed ? this.hide() : this.show();
  }

  buttonClickHandler() {
    const container = $(this.parentId).prev();
    const that = this;
    $('.input-date-dropdown__button', container).click(function() {
      that.toggleDatepicker();
    })
  }
}

  const doubleDateDropdown1 = new DoubleDateDropdown('#calendar-start', '#start', '#end');
  const doubleDateDropdown2 = new DoubleDateDropdown('#calendar-start-2', '#start-2', '#end-2');

 })
 