
$('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
//preloader

$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(250).fadeOut("slow");
    $(".contentBox .container").delay(250).fadeIn(250);
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

//text rotator
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

//arrow smooth scroll
$('a.smoth-scroll').on('click', function (e) {
    e.preventDefault();
    const anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 500);
    e.preventDefault();
});

//href remover
$('.nav-link').on('click', function (e) {
    //e.preventDefault();
    const elem = $(this); // save it so we can use it in the animate

    $('html, body').animate({
        scrollTop: $(elem.attr('href')).offset().top
    }, 500);
    return false
    //e.preventDefault();
});

//contact us validation

function validateName(){
    var name = document.getElementById('name').value;
    if(name.length == 0){
        alert("Name is required.");
        return false;
    }
    else
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.length == 0){
        alert("Email is required.");
        return false;
    }
    else if(!re.test(email)){
        alert("Please enter valid Email.");
        return false;
    }
    else
    return true;
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 15;
    var left = required - message.length;

    if(message.length == 0){
        alert("Message is required.");
        return false;
    }

    else if (left > 0) {
        alert("Minimum 15 characters required,\n" + left + ' more to go.' );
        return false;
    }
    else
    return true;
}

$('.msgbutton').on('click', function (e) {
    if (validateName() && validateEmail() && validateMessage()) {
        alert("Click OK to Continue.");
    }
    else{
        e.preventDefault();
    }
});

