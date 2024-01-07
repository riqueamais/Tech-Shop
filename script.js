$(document).ready(function () {
    $('.hamburguer-bt').click(function () {
        // Alternar a classe 'ativo' no menu
        $(".menu").toggleClass("ativo");

        // Adicionar a classe 'ativo' à ul do menu segundo
        $(".menu-segundo").toggleClass("ativo");
    });

    $(".menu-segundo ul li a").click(function () {
        // Remover a classe 'ativo' ao clicar em um link no menu segundo
        $(".menu").removeClass("ativo");
        $(".menu-segundo").removeClass("ativo");
    });

    // Atualizar a classe 'drop' no header com base no scroll
    $(window).scroll(function () {
        var window_top = $(window).scrollTop() + 1;

        if (window_top > 140) {
            $('header').addClass('drop');
        } else {
            $('header').removeClass('drop');
        }
    });

    $('nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
          
        $('html, body').animate({ 
          scrollTop: targetOffset - 100
        }, 500);
      });
});
