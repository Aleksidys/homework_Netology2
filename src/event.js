/*document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.container');
    let counter = document.querySelector('.counter');
    let failCounter = document.querySelector('.failCounter');
    
    let count = 0;
    let failCount = -1;
    let intervalId;

    function startInterval() {
        intervalId = setTimeout(function() {
            // Этот код выполнится, если не было клика на элемент с классом 'target' в течение интервала
            failCount = failCount + 1;
            console.log('Failed to click on element with class "target"');
            failCounter.innerText = `Fail Count: ${failCount}`;
            startInterval(); // Запускаем интервал заново
        }, 1000);
    }

    container.addEventListener('click', function(event) {
        let targetElement = event.target;

        if (targetElement.closest('.container') && targetElement.classList.contains('target')) {
            // Обработка клика на элементе с классом 'target'
            count = count + 1;
            console.log('Clicked on element with class "target"');
            counter.innerText = `Счет: ${count}`;
            
            clearTimeout(intervalId); // Останавливаем текущий таймаут
            startInterval(); // Запускаем таймаут заново
        }
    });

    // Запускаем интервал в начале
    startInterval();
});*/
