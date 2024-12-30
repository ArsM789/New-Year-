document.addEventListener('DOMContentLoaded', function() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
  
    function updateCountdown() {
        const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
        const now = new Date();
        const diff = newYearDate - now;
  
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
        daysEl.innerText = days < 10 ? '0' + days : days;
        hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000);


    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 100; // Количество снежинок

    // Функция для создания снежинки
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Случайное положение по горизонтали
        snowflake.style.left = `${Math.random() * 100}%`;

         // Случайное начальное положение по вертикали
        snowflake.style.top = `${-Math.random() * 100}px`;

        // Случайный размер
        const size = Math.random() * 5 + 5;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;


        // Случайная скорость падения
        const animationDuration = Math.random() * 5 + 5;
        snowflake.style.animationDuration = `${animationDuration}s`;

        // Случайная задержка
        snowflake.style.animationDelay = `${Math.random() * 2}s`;

        snowContainer.appendChild(snowflake);

        // Удалиение снежинки после окончания анимации
         snowflake.addEventListener('animationend', () => {
             snowflake.remove();
        });

        return snowflake;
    }

    // Создаем начальное количество снежинок
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake();
    }

    // Добавляем новые снежинки с заданным интервалом
    setInterval(() => {
        createSnowflake();
    }, 1000);
});
