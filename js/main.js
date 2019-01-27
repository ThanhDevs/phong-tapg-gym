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
        $('.btn-show-form').on('click', function () {
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
