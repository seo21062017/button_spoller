$(document).ready(function(){
// parameters
    $('.slider-big').slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider",
        mobileFirst: false,
    });

    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 25,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: true,
        asNavFor: ".slider-big",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        // appendArrows: $('.content'),
        // appendDots: $('.content'),
    });
// Events
//     $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//         console.log(currentSlide);
//     });
//     $('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//         console.log(currentSlide);
//     });

// Methods
//     $('.slider').slick('setPosition');
//     $('.slider').slick('goTo', 3);
//     $('.slider').slick('slickPrev');
//     $('.slider').slick('slickNext');
//
//     $('.link_l').slick(function (event) {
//         $('.slider').slick('slickPrev');
//     });
//     $('.link_r').slick(function (event) {
//         $('.slider').slick('slickNext');
//     });
//     $('.link_play').slick(function (event) {
//         $('.slider').slick('slickPlay');
//     });
//     $('.link_play').slick(function (event) {
//         $('.slider').slick('slickPause');
//     });

// disable slider
//     $('.slider').slick('unslick');

    // Add and remove blocks
    $('.link_add').click(function (event) {
        $('.slider').slick('slickAdd', '<div class="newSlider">123</div>');
        return false;
    });
    $('.link_remove').click(function (event) {
        $('.slider').slick('slickRemove', 0);
        return false;
    });

    // Create filter
    var filtered = false;
    $('.link_filter').on('click', function(){
        if (filtered === false) {
            $('.slider').slick('slickFilter','.filter');
            $(this).text('Убрать фильтр');
            filtered = true;
        } else {
            $('.slider').slick('slickUnfilter');
            $(this).text('Фильтровать');
            filtered = false;
        }
        return false;
    });
// change parameters
//     let  s=$('.slider').slick('slickGetOption', 'slidesToShow');
//     console.log(s);
//
//     let  q=$('.slider').slick('slickSetOption', 'slidesToShow', 2);
//     console.log(q);

});