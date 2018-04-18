$(document).ready(function () {
    $(".action").hover(function () {
        $(this.childNodes[0]).animate({opacity:0.5});
        $(this.childNodes[1]).animate({opacity:1});
    },function () {
        $(this.childNodes[0]).animate({opacity:1});
        $(this.childNodes[1]).animate({opacity:0});
    })
});
//переходы для nav-bar
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top - 60}, 800);
    });
});
//переход для стрелки внизу
$(document).ready(function () {
    $("#goTop").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 60}, 800); //анимировать переход на расстояние - top за 1500 мс
    });
});