(function(){

  'use strict';

  var progressBar = document.getElementById('js-progress-bar'),
      startButton = document.getElementById('js-start-button');

  function progress(percentage) {
    var value;

    if (!isFinite(percentage)) {
      throw new Error('percentage must be a finite number');
    }

    value = parseInt(percentage, 10);

    if (value < 0) {
      value = 0;
    }
    if (value > 100) {
      value = 100;
    }

    Velocity(progressBar, 'finish');

    return Velocity(progressBar, {
      width: percentage + '%'
    }, {
      duration: 500,
      easing: 'easeOutQuint'
    });
  }

  startButton.addEventListener('click', function() {
    Velocity(progressBar, {
      opacity: 1,
      width: 0
    }, {
      display: '',
      duration: 0
    });

    setTimeout(function() { progress((Math.random() * 20 >> 0) + 0);  },  100);
    setTimeout(function() { progress((Math.random() * 20 >> 0) + 20); },  200);
    setTimeout(function() { progress((Math.random() * 20 >> 0) + 40); },  500);
    setTimeout(function() { progress((Math.random() * 20 >> 0) + 60); },  800);
    setTimeout(function() { progress((Math.random() * 20 >> 0) + 80); }, 1200);

    setTimeout(function() {
      progress(100);

      Velocity(progressBar, 'fadeOut');
    }, 1300);
  }, false);

}());
