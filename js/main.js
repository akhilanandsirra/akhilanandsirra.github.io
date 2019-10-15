$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})

$('.navbar .navbar-brand').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
})