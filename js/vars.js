'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var NUMBER_WIZARDS = 4;
  var NAME_MASS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAME_MASS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвин'];
  var COATS_MASS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYESCOLOR_MASS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_MASS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.vars = {
    setup: setup,
    setupOpen: setupOpen,
    setupClose: setupClose,
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    NUMBER_WIZARDS: NUMBER_WIZARDS,
    NAME_MASS: NAME_MASS,
    SURNAME_MASS: SURNAME_MASS,
    COATS_MASS: COATS_MASS,
    EYESCOLOR_MASS: EYESCOLOR_MASS,
    FIREBALL_MASS: FIREBALL_MASS
  };
})();
