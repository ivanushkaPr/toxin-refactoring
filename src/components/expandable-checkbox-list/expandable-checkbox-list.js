$(document).ready(function() {
  class ExpandableCheckBoxList {
    constructor(buttonClassName) {
      this.button = $(buttonClassName);
      this.root = this.button.parent().parent();
      this.init();
    }

    init() {
      const that = this;
      that.button.click(function() {
        that.toggleButtonClass.call(this);
        that.toggleCheckboxList();
      });
    }

    toggleButtonClass() {
      $(this).toggleClass('expandable-checkbox-list__button-open_opened');
    }

    toggleCheckboxList() {
      $('.js-expandable-checkbox-list__list', this.root).toggle(300);
    }
  }

  let expandable = new ExpandableCheckBoxList('.js-expandable-checkbox-list__button-open');
});