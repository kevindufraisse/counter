(function () {
  function updateCounter() {
    var min = 130;
    var max = 333;
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var counterElement = document.querySelector(".counter-widget-popup .random-number");
    if (counterElement) {
      counterElement.textContent = randomNumber;
    }
  }

  function initCounterWidget() {
    var container = document.querySelector(".counter-widget-popup");
    if (container) {
      container.innerHTML = '<span>Personne en ligne: </span><span class="random-number">100</span>';
      function updateWithRandomInterval() {
        var minInterval = 20;
        var maxInterval = 40;
        var randomInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
        updateCounter();
        setTimeout(updateWithRandomInterval, randomInterval * 1000);
      }
      updateWithRandomInterval();
    }
  }

  document.addEventListener("DOMContentLoaded", initCounterWidget);
})();
