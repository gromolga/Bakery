$(function () {
    $('#toggle-skin').click(function () {
        var link = $('#dark');
        if (link.length) {
            link.remove();
            return;
        }
        $('head').append('<link rel="stylesheet" href="' + app.darkUrl + '" id="dark">');
    });

    var $pointer = $('.pointer');
    $pointer.click(function () {

        var $this = $(this);

        if ($this.hasClass('active')) {
            return;
        }

        $pointer.removeClass('active');
        $this.addClass('active');

        var schemaCode = $this.data('schema'),
            link = $('#dark');
        switch (schemaCode) {
            case 'light':
                if (link.length) {
                    link.remove();
                }
                break;
            case 'dark':
                if (!link.length) {
                    $('head').append('<link rel="stylesheet" href="' + app.darkUrl + '" id="dark">');
                }
                break;
        }
    });

    $('.header-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut'
    });

    $('#contact-us').click(function () {
        $('#contact-us-popup').fadeIn();
        $('body').css({
            'overflow-y': 'hidden'
        });
    });
    $('#popup-close').click(function () {
        $('#contact-us-popup').fadeOut();
        $('body').css({
            'overflow-y': 'auto'
        });
    });

    var $tabButtons = $('.products-category-tab'),
        $tabs = $('.products-tab');
    $tabButtons.click(function () {
        if ($(this).hasClass('active')) {
            return;
        }
        var index = $tabButtons.index($(this));
        if (index >= 0) {
            switchTab(index);
        }
    });

    function switchTab(index) {
        $tabButtons.removeClass('active').eq(index).addClass('active');
        $tabs.removeClass('active').eq(index).addClass('active');
    }

    function getHash(url) {
        return url.substr(url.indexOf('#'));
    }

    $('.nav-link').click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        var selector = getHash($(this).attr('href'));
        if ($(this).data('tab')) {
            var $tab = $(selector),
                index = $tabs.index($tab);
            if (index >= 0 && !$tab.hasClass('active')) {
                switchTab(index);
            }
        }

        $('html, body').animate({
            scrollTop: $(selector).offset().top
        }, 2000);

    });

    $('.products-tab-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        dotsData: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                dots: false
            },
            576: {
                dots: true
            }
        }
    });

    $('#up-button').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $('#up-button').css({opacity: 0}).addClass('hide');
        } else if (scroll < 1000) {
            scroll = (scroll - 200) / 800.00;
            $('#up-button').css({opacity: scroll}).removeClass('hide');
        } else {
            $('#up-button').css({opacity: 1}).removeClass('hide');
        }

    });

});