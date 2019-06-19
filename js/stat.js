'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 40;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = CLOUD_HEIGHT - GAP - GAP - (FONT_GAP * 3);

/**
  * Показывает облако на странице
  * @param {Object} ctx — холст канваса, на котором рисуем
  * @param {number} x — координата начала отрисовки облака по X
  * @param {number} y — координата начала отрисовки облака по Y
  * @param {string} color — цвет заливки
  */
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/**
 * ф-ция для определения максимального значения из массива
 * @param {Array} arr — исходный массив, в котором ищем максимальное значение
 * @return {number} — максимальное значение массива
 */
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff');

  /**
  * Указали шрифт + размер + цвет для надписей на облачке
  */
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    /**
     * Тернарный: если "Вы" - цвет красный, иначе - рандом из синего
     */
    ctx.fillStyle = (players[i] === 'Вы') ?
      'rgba(255, 0, 0, 1)' :
      'hsl(240, ' + Math.round(Math.random() * 100) + '%, 25%)';

    /**
     * Подпись под столбиком с именем игрока
     */
    ctx.fillText(players[i],
        CLOUD_X + GAP + (BAR_GAP + TEXT_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);

    /**
     * Рисуем столбик гистограммы: отступ от кра холста по-горизонтали,
     * --/-- по-вертикали, размеры столбца по-горизонтали, --/-- по-вертикали
    */
    ctx.fillRect(CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - GAP,
        BAR_WIDTH,
        (((BAR_HEIGHT * times[i]) / maxTime) * -1) + 30);

    /**
     * Подпись времени над столбцами гистграммы
     */
    ctx.fillText(Math.round(times[i]),
        CLOUD_X + GAP + (BAR_GAP + TEXT_WIDTH) * i,
        (CLOUD_Y + CLOUD_HEIGHT) - (FONT_GAP - ((BAR_HEIGHT * times[i]) / maxTime) * -1) - GAP);
  }
};
