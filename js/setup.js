'use strict';

var NUMBER_WIZARDS = 4;
var NAME_MASS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME_MASS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго'];
var COATS_MASS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLOR_MASS = ['black', 'red', 'blue', 'yellow', 'green'];

/**
 * Показываем окно с параметрами мага
 */
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

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
 * Созданик объекта "Волшебник"
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
 * Клонирование волшебников
 * @param {object} wizardObject -- обьект данных волшебников
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

var similarListElement = userDialog.querySelector('.setup-similar-list');
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
