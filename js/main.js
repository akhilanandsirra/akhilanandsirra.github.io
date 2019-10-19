$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
//preloader

$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut("slow");
});

//navigation color
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

//parallax

var rellax = new Rellax('.rellax', {
    callback: function (position) {
        // callback every position change
    }
});

//scroll function
$('body').scrollspy({
    target: '.navbar-collapse',
    offset: 195
});

$elements = $('#text-rotator').find('div');
$elements.hide().first().show();

setInterval(function () {
    $elements.filter(':visible').fadeOut('slow', function () {
        $next = $(this).next();
        if ($next.length === 0) {
            $next = $elements.first();
        }
        $next.fadeIn('slow');
    });
}, 3000);

//arrow smooth scroll
$('a.smoth-scroll').on('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
    e.preventDefault();
});

//home arrow
var arrowBounce = function () {
    var arrow = $(".arrow");
    if (arrow.hasClass("lift")) {
        arrow.removeClass("lift");
    } else {
        arrow.addClass("lift");
    }
};

setInterval(arrowBounce, 800);

//href remover
$('.nav-link').on('click', function (e) {
    e.preventDefault();
    const elem = this; // save it so we can use it in the animate

    $('html, body').animate({
        scrollTop: $($(elem).attr('href')).offset().top
    }, 250);
});