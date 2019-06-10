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
var barHeight = CLOUD_HEIGHT - GAP - GAP - (FONT_GAP * 3);

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function() {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = "16px PT Mono";
  ctx.fillStyle = '#000';
  ctx.fillText("Ура вы победили!", 120, 40);
  ctx.fillText("Список результатов:", 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 25%)';
    }
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_GAP + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, ((barHeight * times[i]) / maxTime) * -1) + 30;
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_GAP + TEXT_WIDTH) * i, (CLOUD_Y + CLOUD_HEIGHT ) - (GAP - FONT_GAP - ((barHeight * times[i]) / maxTime) * -1) - GAP);
  }
};
