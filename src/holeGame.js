// holejame.js
window.addEventListener('load', function() {
  // Находим все дочерние элементы у тега с классом 'container'
  let containerChildren = document.querySelectorAll('.container > *');
  let failCounter = document.querySelector('.failCounter');
  let failCount = 0;
  let timeoutId;

  function startTimeout() {
    timeoutId = setTimeout(function() {
      // Этот код выполнится, если не было клика на элемент с классом 'target' в течение интервала
      failCount = failCount + 1;
      console.log('Failed to click on element with class "target"');
      failCounter.innerText = `Fail Count: ${failCount}`;
      resetTimeout(); // Запускаем таймаут заново
    }, 1000);
  }

  function resetTimeout() {
    clearTimeout(timeoutId);
    startTimeout();
  }

  // Запускаем таймаут в начале
  startTimeout();

  setInterval(function() {
    // Пример: Добавим класс 'item' к каждому дочернему элементу (если его нет)
    containerChildren.forEach(function(child) {
      if (!child.classList.contains('item')) {
        child.classList.add('item');
      }
    });

    // Удаляем класс 'target' у всех элементов
    containerChildren.forEach(function(item) {
      item.classList.remove('target');
    });

    // Выбираем случайный элемент и добавляем ему класс 'target'
    let randomIndex = Math.floor(Math.random() * containerChildren.length);
    containerChildren[randomIndex].classList.remove('item'); // Убираем предыдущий класс 'item'
    containerChildren[randomIndex].classList.add('target'); // Добавляем класс 'target'
    resetTimeout(); // Сбрасываем таймаут при каждой смене класса 'target'
  }, 1000); // Интервал в миллисекундах (в данном случае, 1000 миллисекунды = 1 секунда)
});

// event.js
document.addEventListener('DOMContentLoaded', function() {
  let counter = document.querySelector('.counter');
  let count = 0;

  let container = document.querySelector('.container');

  container.addEventListener('click', function(event) {
    let targetElement = event.target;

    // Проверяем, является ли кликнутый элемент частью .container и имеет ли класс 'target'
    if (targetElement.closest('.container') && targetElement.classList.contains('target')) {
      // Обработка клика на элементе с классом 'target'
      count = count + 1;
      console.log('Clicked on element with class "target"');
      counter.innerText = `Счет: ${count}`;

      // Удаляем класс 'target' у кликнутого элемента
      targetElement.classList.remove("target");
      // Добавляем класс 'item' у кликнутого элемента
      targetElement.classList.add("item");
    }
  });
});
