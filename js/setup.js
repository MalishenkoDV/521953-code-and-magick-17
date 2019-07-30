'use strict';

(function () {


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
      name: getRandomElementFromArray(window.vars.NAME_MASS) + ' ' + getRandomElementFromArray(window.vars.SURNAME_MASS),
      coatColor: getRandomElementFromArray(window.vars.COATS_MASS),
      eyes: getRandomElementFromArray(window.vars.EYESCOLOR_MASS)
    };
    return wizardObject;
  };

  var wizardObjects = [];

  for (var i = 0; i < window.vars.NUMBER_WIZARDS; i++) {
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
  var similarListElement = window.vars.setup.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');

  /* Задание 4.1 */
  // Нажатие на элемент .setup-open удаляет класс hidden
  // у блока setup. Нажатие на элемент .setup-close, расположенный
  // внутри блока setup возвращает ему класс hidden.

  var setBasicCoords = function () {
    window.vars.setup.style.top = '';
    window.vars.setup.style.left = '';
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.vars.ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.vars.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.vars.setup.classList.add('hidden');
    setBasicCoords();
  };

  window.vars.setupOpen.addEventListener('click', function () {
    openPopup();
  });

  window.vars.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.vars.ENTER_KEYCODE) {
      openPopup();
    }
  });

  window.vars.setupClose.addEventListener('click', function () {
    closePopup();
  });

  window.vars.setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.vars.ENTER_KEYCODE) {
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
    var colorCoats = getRandomElementFromArray(window.vars.COATS_MASS);
    setupWizardCoat.style.fill = colorCoats;
  });

  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  setupWizardEyes.addEventListener('click', function () {
    var colorEyes = getRandomElementFromArray(window.vars.EYESCOLOR_MASS);
    setupWizardEyes.style.fill = colorEyes;
  });

  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
  setupWizardFireball.addEventListener('click', function () {
    var colorFireball = getRandomElementFromArray(window.vars.FIREBALL_MASS);
    setupWizardFireball.style.background = colorFireball;
  });


  window.setup = {
  };
})();
