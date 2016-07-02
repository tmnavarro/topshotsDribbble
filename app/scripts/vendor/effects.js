$(document).ready(function(){

  var callParallax = function(){
      // Altura do Scroll
      var scrollHeight = $(this).scrollTop();

      $('.logo').css({
        'transform': 'translateY('+ scrollHeight/2 +'px)'
      });
  };

  // Evento Scroll Parallax
  $(window).scroll(callParallax);
});
