$(document).ready(function(){
  'use strict';
  // Calback scroll callParallax
  var callParallax = function(){
      // Altura do Scroll
      var scrollHeight = $(this).scrollTop();

      // Configuração efeito e velocidades parallax
      $('.parallax-back').css({
        'transform' : 'translateY('+ -scrollHeight/1.5+'px)'
      });

      $('.logo').css({
        'transform': 'translateY('+ scrollHeight/1.5 +'px)'
      });

      $('.parallax-front').css({
        'transform' : 'translateY('+ scrollHeight/1.2+'px)'
      });

      //Ativação de animação para galeria
      if(scrollHeight > 450){
        $('.page-main').find('article').each(function(i){
          $('.page-main').find('article').eq(i).addClass('is-showing');
        });
      }
  };

  // Evento Scroll Parallax
  $(window).scroll(callParallax);

  // Evento show info shots
  $(document).on('click', 'article', function(){
    $('.shot-description').removeClass('show-animate');

    $(this).find('.shot-description').addClass('show-animate');
  });

});
