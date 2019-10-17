$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
//preloader
setTimeout(() => {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut("slow");
}, 1500);

