/*
* @Author: komarov.s
* @Date:   2016-09-02 16:47:54
* @Last Modified by:   Sergey Komarov
* @Last Modified time: 2016-09-07 11:17:17
*/

'use strict';

$( document ).ready(function() {
    // Carusel items
    var slideShow = $('.slideshow'),
        categoryCarousel = $('.sections-list__row'),
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
    slideShow.owlCarousel({
        loop:true,
        margin:1,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:1000,
        items:1
    });

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
        navLink = $('.nav__link_dropdown'),
        doc = $(document);

    navLink.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.next('.nav__dropdown').slideToggle(200);
        $this.toggleClass('nav__link_open_true');
    });

    doc.on('click touchend',function(e){
        if ( !dropDown.is(e.target) && dropDown.has(e.target).length === 0 && !navLink.is(e.target) ) {
            navLink.removeClass('nav__link_open_true');
            dropDown.slideUp(200);
        }
    });

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



