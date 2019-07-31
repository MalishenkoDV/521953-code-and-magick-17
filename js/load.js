'use strict';

(function () {
  window.load = function (url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          break;

        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь не авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;

        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        onError(error);
      }
    });
  //   xhr.addEventListener('load', function () {
  //     var error;

  //     if (xhr.status === 200) {
  //       onSuccess(xhr.response);
  //     } else {
  //       onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
  //     }
  //   });

  //   xhr.addEventListener('error', function () {
  //     onError('Произошла ошибка соединения');
  //   });

  //   xhr.addEventListener('timeout', function () {
  //     onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  //   });

  //   xhr.timeout = 10000; // 10s

  //   xhr.open('GET', url);
  //   xhr.send();
  // }
})();

// Файл main.js
// 'use strict';
// (function () {
//   var onError = function (message) {
//     console.error(message);
//   };

//   var onSuccess = function (data) {
//     console.log(data);
//   };

//   window.load('https://up.htmlacademy.ru/assets/javascript/demo/8-xhr/unknownfile.json', onSuccess, onError);

//   window.load('https://up.htmlacademy.ru/assets/javascript/demo/8-xhr/data.json', onSuccess, onError);

//   window.load('https://api.github.com/user', onSuccess, onError);
// })();
