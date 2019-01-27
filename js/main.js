; (function ($) {
    'use strict'

    // Show Main Menu
    var showMainMenu = function () {
        $('#hamburger').on('click', function () {
            $('#main-menu').toggleClass('is-show')
            $('#main-menu .main-menu--cls').toggleClass('is-show')
        });

        $('#main-menu .main-menu--cls').on('click', function () {
            $('#main-menu').removeClass('is-show')
            $('#main-menu .main-menu--cls').removeClass('is-show')
        })
    }

    // Scroll
    var scrollFun = function () {
        $(window).scroll(function () {
            var scroll = $(this).scrollTop(),
                overviewOffSetTop = $('#overview').offset().top,
                overviewOuterHeight = $('#overview').outerHeight(),
                windowHeight = $(window).height()

            // console.log((overviewOffSetTop - overviewOuterHeight), scroll )
            if (scroll > (overviewOffSetTop + overviewOuterHeight - windowHeight)) {
                $('.row-banner-form').addClass('fixed-form')
                $('.form-btn-fixed').addClass('show-form-btn')
            } else if (scroll < (overviewOffSetTop + overviewOuterHeight - windowHeight)) {
                $('.row-banner-form').removeClass('fixed-form')
                $('.form-btn-fixed').removeClass('show-form-btn')
                $('.row-banner-form').removeClass('is-show')
            }

            // Show Form
            $('.form-btn-fixed').on('click', function () {
                $('.row-banner-form').addClass('is-show')
                $('#fixed-form-cls').addClass('fixed-form-cls')
            })

            // Hidden form
            $('#fixed-form-cls').on('click', function () {
                $('.row-banner-form').removeClass('is-show')
            })

        })
    }

    // Target Scroll Section
    var targetScrollSection = function () {
        $('#main-menu ul li a, .scroll-btn').on('click', function () {
            var anchor = $(this).attr('href').split('#')[1];
            if (anchor) {
                if ($('#' + anchor).length > 0) {
                    var target = $('#' + anchor).offset().top

                    $('html,body').animate({ scrollTop: target }, 1000, 'easeInOutExpo')
                }
            }
            return false;
        });
    }

    // Show Contact Form
    var showContactForm = function () {
        $('.btn-contact').on('click', function () {
            $('.row-banner-form, #fixed-form-cls').addClass('is-show');
        });

        $('#fixed-form-cls').on('click', function () {
            $('.row-banner-form, #fixed-form-cls').removeClass('is-show');
        });
    };

    // Dom Ready
    $(function () {
        showMainMenu();
        showContactForm();
        targetScrollSection();

    });
})(jQuery);
