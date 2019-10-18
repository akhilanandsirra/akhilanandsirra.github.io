$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
//preloader
/*setTimeout(() => {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut("slow");
}, 1500);*/


$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut("slow");
});

//navbar scroll
$(document).scroll(function () {
    $('.navbar').toggleClass('scrolled', $(this).
        scrollTop() > $('.navbar').height());
});

var rellax = new Rellax('.rellax', {
    callback: function (position) {
        // callback every position change
    }
});