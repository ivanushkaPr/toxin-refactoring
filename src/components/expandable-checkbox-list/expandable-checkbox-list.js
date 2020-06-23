$(document).ready(function() {
  class ExpandableCheckBoxList {
    constructor(obj) {

      const { buttonClassName, listName, mod} = obj;
      this.button = $(buttonClassName);
      this.root = this.button.parent().parent();
      this.list = $(listName, this.root);
      this.mod = mod;
      this.init();
    }

    init() {
      const that = this;
      that.button.click(function() {
        that.toggleButtonClass.call(this, that.mod);
        that.toggleCheckboxList();
      });
    }

    toggleButtonClass(mod) {
      $(this).toggleClass(mod);
    }

    toggleCheckboxList() {
      this.list.toggle(300);
    }
  }

  let expandable = new ExpandableCheckBoxList({
    buttonClassName: '.js-expandable-checkbox-list__button-open',
    listName: '.js-expandable-checkbox-list__list',
    mod:'expandable-checkbox-list__button-open_opened'
  });
});