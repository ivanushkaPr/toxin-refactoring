$(document).ready(function() {
  class BurgerMenu {
    constructor(openButtonClassName, containerClassName) {
      this.init(openButtonClassName, containerClassName)
    }

    init(openButtonClassName, containerClassName) {
      $(openButtonClassName).click(function() {
        $(containerClassName).toggle(300);
      })
    }
  }

  const burgerMenu = new BurgerMenu('.header-register__burger-menu', '.header-register__menu');
})