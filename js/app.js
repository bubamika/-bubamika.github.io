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
})
