$(document).ready(function(){

  var callParallax = function(){
      // Altura do Scroll
      var scrollHeight = $(this).scrollTop();

      $('.logo').css({
        'transform': 'translateY('+ scrollHeight/1.5 +'px)'
      });
  };

  // Evento Scroll Parallax
  $(window).scroll(callParallax);
});
