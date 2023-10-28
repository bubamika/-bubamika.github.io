$(window).ready(function() {
  function updateCountdown() {
      var now = new Date();
      var endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      var timeLeft = endOfDay - now;
      var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      var countdownText = hours + " " + minutes + " " + seconds + "";
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  
    // Обновляем отсчет каждую секунду
    setInterval(updateCountdown, 1000);
  
    // Вызываем функцию сразу, чтобы отображать отсчет без задержки
    updateCountdown();


    $(".burger").click(function() {
      $(".menu").addClass("open");
      $(".overlay").show();
    });
    $(".burger__close, .menu__item").click(function() {
      $(".menu").removeClass("open");
      $(".overlay").hide();
    });
    $(".overlay").click(function() {
      $(".burger__close").click();
    });


    $('.reviews__slider').owlCarousel({
      loop:true,
      nav:true,
      mouseDrag:true,
      touchDrag: true,
      pullDrag:false,
      freeDrag:false,
      URLhashListener:false,
      stagePadding: 50,
      dots:true,
      margin:30,
      responsive:{
          0:{
              items:1,
              margin: 15,
          },
          576:{
              items:2,
              margin: 35,
          },
          992:{
              items:3,
          },
          1440:{
              items:4,
          }
      }
  });

  $(".product__card-btn").click(function() {
    $(".product__card").addClass("active");
  });

    // Получаем элементы блока product__card и кнопки product__card-btn
    const productCard = document.querySelector('.product__card');
    const productCardBtn = document.querySelector('.product__card-btn');

    // Добавляем слушатель события клика на кнопку product__card-btn
    productCardBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (например, переход по ссылке)
        productCard.classList.add('active'); // Добавляем класс active
    });

    // Добавляем слушатель события клика на весь документ
    document.addEventListener('click', (event) => {
        // Проверяем, был ли клик вне блока product__card
        if (event.target !== productCard && !productCard.contains(event.target)) {
            // Если клик был вне блока, удаляем класс active
            productCard.classList.remove('active');
        }
    });



});
