
function callPopupRegisterTI() {
    event.preventDefault();
    $.fancybox.open({
        src: '#popup-register-ti',
        type: 'inline',
        touch: false,
        beforeShow: function () {
            $("body>*:not(.fancybox-container):not(.popup-register-ti)").addClass("blur");
        },
        afterClose: function () {
            $("body>*:not(.fancybox-container):not(.popup-register-ti)").removeClass("blur");
        }
    });
}


$(document).ready(function () {
    if ($('.ti-rev-slider').length > 0) {
        $('.ti-rev-slider').slick({
            autoplay: true,
            dots: true,
            dotsClass: 'ti-rev-custom-paging',
            customPaging: function (slider, i) {
                return (i + 1) + '/' + slider.slideCount;
            },
            prevArrow: $('.ti-rev-prev'),
            nextArrow: $('.ti-rev-next')
        });
    }
});

function tiToggleLi() {
    $('.ti-prog-ol li').slideDown(300);
    $('.tiToggleLiBtn').attr('style', 'display:none;');
}

function af3dmh() {
    var koeffX = .6;//коеффициент наклона по оси X
    var koeffY = .6;//коеффициент наклона по оси Y
    var containers = $('.af3dmh-container');

    containers.each(function () {
        var container = $(this)[0];
        var inner = $(this).find('.af3dmh-inner')[0];
        var beforeStyle = $(this).find('.af3dmh-inner').attr('style');

        //-----------------------------------------

        var counter = 0;
        var updateRate = 10;
        var isTimeToUpdate = function () {
            return counter++ % updateRate === 0;
        };

        //-----------------------------------------

        var onMouseEnterHandler = function (event) {
            update(event);
        };

        var onMouseLeaveHandler = function () {
            inner.style = beforeStyle;
        };

        var onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        //-----------------------------------------

        var update = function (event) {
            var parentOffset = $(container).offset();
            var relX = event.pageX - parentOffset.left;
            var relY = event.pageY - parentOffset.top;

            var transformX = ((relX - container.offsetWidth / 2) / container.offsetWidth).toFixed(2);
            var transformY = ((relY - container.offsetHeight / 2) / container.offsetHeight).toFixed(2);

            updateTransformStyle(
                transformY * -1 * koeffX,
                transformX * koeffY
            );
        };

        var updateTransformStyle = function (x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTransform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };

        //-----------------------------------------

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
    });
}

$(document).ready(function () {
    af3dmh();
});
