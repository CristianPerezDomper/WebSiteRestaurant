$(document).ready(function () {
    //Efecto parallax
    $(window).scroll(function () {
        var windowWidth = $(window).width();

        if (windowWidth > 800) {
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                transform: 'translate(0px,' + scroll / 2 + '%)',
            });

            $('.acerca-de article').css({
                transform: 'translate(0px, -' + scroll / 4 + '%)',
            });
        }
    });

    //Aseguramos si cambia el ancho de la página
    $(window).resize(function () {
        var windowWidth = $(window).width();
        $('.acerca-de article').css({
            transform: 'translate(0px,0px)',
        });
    });
});
