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

  /**
   * Функция по произвольной выборке числа
   * @param {number} min - указывает начало диапазона цифр
   * @param {number} max - указывает конец диапазона цифр
   * @return {*} - переводит диапазон в начальную и конечную точки и возвращает произвольный результат.
   */
  var getRandomFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /**
   * Случайное значение из массива имен, фамилий, etc.
   * @param {Array} arr - произвольный масив
   * @return {*} - элемент масива
   */
  var getRandomElementFromArray = function (arr) {
    return arr[getRandomFromInterval(0, arr.length - 1)];
  };

  /**
   * Создание объекта "Волшебник"
   * @param {str} name - свойство "Волшебника" - полное имя, сложенное из массива имен и фамилий
   * @param {str} coatColor - свойство "Волшебника" - цвет курточки
   * @param {str} eyes - свойство "Волшебника" - цвет глаз
   * @return {Object} wizardObject - готовый объект "Волшебник"
   */
  var createWizard = function () {
    var wizardObject = {
      name: getRandomElementFromArray(NAME_MASS) + ' ' + getRandomElementFromArray(SURNAME_MASS),
      coatColor: getRandomElementFromArray(COATS_MASS),
      eyes: getRandomElementFromArray(EYESCOLOR_MASS)
    };
    return wizardObject;
  };

  var wizardObjects = [];

  for (var i = 0; i < NUMBER_WIZARDS; i++) {
    wizardObjects[i] = createWizard();
  }

  /**
   * Поиск в темплейтах по ид
   * эллемента с нужным классом
   */
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  /**
   * Клонирование волшебников
   * @param {object} wizardObject -- обьект данных волшебника
   * @return {object} wizardElement
   */
  var renderWizard = function (wizardObject) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizardObject.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardObject.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardObject.eyes;
    return wizardElement;
  };

  /**
   * Процесс клонирования волшебников
   */
  var fragment = document.createDocumentFragment();
  wizardObjects.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });

  /**
   * Показываем окно с параметрами мага
   */
  var similarListElement = setup.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');

  /* Задание 4.1 */
  // Нажатие на элемент .setup-open удаляет класс hidden
  // у блока setup. Нажатие на элемент .setup-close, расположенный
  // внутри блока setup возвращает ему класс hidden.

  var setBasicCoords = function () {
    setup.style.top = '';
    setup.style.left = '';
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setBasicCoords();
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  /** 4.1-3 - добавление переключения цветов мантии и глаз
   * по нажатию.
   */
  /**
   * Ищем блок в ДОМ-е по классу '.setup-wizard'.
   */
  // var setupWizard = document.querySelector('.setup-wizard');

  /** Делаем выборку эллемента с классом '.wizard-coat' в '.setup-wizard'
   * Происходят действия
  */
  var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  setupWizardCoat.addEventListener('click', function () {
    var colorCoats = getRandomElementFromArray(COATS_MASS);
    setupWizardCoat.style.fill = colorCoats;
  });

  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  setupWizardEyes.addEventListener('click', function () {
    var colorEyes = getRandomElementFromArray(EYESCOLOR_MASS);
    setupWizardEyes.style.fill = colorEyes;
  });

  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
  setupWizardFireball.addEventListener('click', function () {
    var colorFireball = getRandomElementFromArray(FIREBALL_MASS);
    setupWizardFireball.style.background = colorFireball;
  });


  window.setup = {
  };
})();
