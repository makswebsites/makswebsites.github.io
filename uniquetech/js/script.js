//burger
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
//hover basic
$('.packages__basic_button').mouseover(function(){
    $('.packages__basic_title, .packages__basic_price, .packages__basic_info').toggleClass('hover');
});
$('.packages__basic_button').mouseout(function(){
    $('.packages__basic_title, .packages__basic_price, .packages__basic_info').removeClass('hover');
});
//hover standard
$('.packages__standard_button').mouseover(function(){
    $('.packages__standard_title, .packages__standard_price, .packages__standard_info').toggleClass('hover');
});
$('.packages__standard_button').mouseout(function(){
    $('.packages__standard_title, .packages__standard_price, .packages__standard_info').removeClass('hover');
});
//hover premium
$('.packages__premium_button').mouseover(function(){
    $('.packages__premium_title, .packages__premium_price, .packages__premium_info').toggleClass('hover');
});
$('.packages__premium_button').mouseout(function(){
    $('.packages__premium_title, .packages__premium_price, .packages__premium_info').removeClass('hover');
});
//btn-top
var $btn = $('.BackTop');

$(window).on('scroll', function() {
    if ($(window).scrollTop() >= 500) {
        $btn.fadeIn();
    } else {
        $btn.fadeOut();
    }
    event.preventDefault();
})
$btn.on('click', function() {
    $('html,body').animate({scrollTop: 0}, 900);
})
//fading
new WOW().init();
//slider
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,    
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 583,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
});
// $('.slider1').slick('unslick');
$(document).ready(function(){
    $('.slider1').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 992,
                settings: "unslick"
                },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                waitForAnimate: false,
            }
            },
            {
            breakpoint: 583,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                waitForAnimate: false,
            }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    waitForAnimate: false,
                }
                },
        ]
    })
});
//fancybox
$(document).ready(function() {
    $("a.fancybox").fancybox()
});
//scroll-behaviour
$(document).ready(function(){
    $('.btn-b').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } // End if
    });
  });