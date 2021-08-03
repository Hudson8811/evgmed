function detectmob() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        $( window ).width() < 1000
    ) {
        return true;
    } else {
        return false;
    }
}


$(document).ready(function () {

    if (!detectmob()) {
        $('.home-page .home-menu a').hover(function () {
            $('.home-page').addClass('hovered');
            $(this).addClass('active').siblings().addClass('opacity');
            var imgId = $(this).data('id');
            $('#home-hover-' + imgId).addClass('active');
            $('#home-hover-' + imgId + ' .home-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 500,
                fade: true,
                arrows: false,
                cssEase: 'linear'
            });
        }, function () {
            $('.home-page').removeClass('hovered');
            $('.home-page .home-menu a').removeClass('active').removeClass('opacity');
            $('.hover-images .hover-block').removeClass('active');
            $('.home-slider').slick('unslick');
        });
    }

    adapHome();



    $(window).resize(function () {
        adapHome();
    });

    $('a.js-scroll').click(function (event) {
        event.preventDefault();
        console.log();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
    });

    /*if ( $('.disable-images').length > 0 ){
        document.oncontextmenu = new Function("return false");
        $(window).keypress(function(event){blockKey(event);});
        $(document).keypress(function(event){blockKey(event);});

        function blockKey(event){
            console.log( event.keyCode);
            keyCode = event.keyCode;
            if (keyCode == '155'){
                alert('printscreen');
            }
            if (keyCode == '17'){
                alert('Блокировка включена.');
            }
        }
    }*/
});
function adapHome() {
    if ($('.home-footer .instagramm').is(':hidden')) {
        $('.home-footer').append($('.home-header .right'))
    }
    else {
        $('.home-header').append($('.home-footer .right'))
    }
}
