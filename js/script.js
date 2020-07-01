$(document).ready(function() {

    /* Scroll on buttons */
    $('.js--scroll-aristos').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-aristos').offset().top}, 1000)
    });
});