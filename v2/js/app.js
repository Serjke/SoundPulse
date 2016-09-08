/*
* @Author: komarov.s
* @Date:   2016-09-02 16:47:54
* @Last Modified by:   komarov.s
* @Last Modified time: 2016-09-08 09:58:28
*/

'use strict';

$(function() {
    // Carusel items
    var categoryCarousel = $('.sections-list__row'),
        videoCarousel = $('.video-carusel'),
        ads = $('.sidebar__item_ads');

    var carouselItems = [categoryCarousel,videoCarousel,ads];

    // Hide carousel controls if less items
    $.each(carouselItems, function(){
        this.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
            if (!event.namespace) return;
            var carousel = event.relatedTarget,
                element = event.target,
                current = carousel.current();
            $('.owl-next', element).toggleClass('disabled', current >= carousel.maximum());
            $('.owl-prev', element).toggleClass('disabled', current <= carousel.minimum());
        });
    });

    // Carousel init

   categoryCarousel.owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: false,
        items:4
    });

    videoCarousel.owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots: false,
        items:3
    });

    ads.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: true,
        items:1
    });

    // Navigation dropdown
    var dropDown = $('.nav__dropdown'),
        navLink = $('.nav__item_dropdown'),
        doc = $(document);

    navLink.hover(
        function () {
            $(this).addClass('nav__item_open_true').children('.nav__dropdown').stop(!0,!1).slideDown(200);
        },
        function () {
            $(this).removeClass('nav__item_open_true').children('.nav__dropdown').stop(!0,!1).slideUp(200);
        }
    );

    // Show hidden menu elments in sidebar
    var hiddenMenuLinks = $('.sidebar-menu__item_hidden');
    $('.sidebar-menu__link_see-all').on('click',function(e){
        e.preventDefault();
        var $this = $(this);
        hiddenMenuLinks.slideToggle(200, function(){
            $(this).toggleClass('sidebar-menu__item_hidden');
            // $this.hide();
        });
    });
});



