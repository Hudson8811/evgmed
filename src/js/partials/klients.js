$(document).ready(function() {
    $('.klients-main .tab').click(function () {
        event.preventDefault();
        $(this).toggleClass('active');
        sortCats();
    });


    $('.klients-page .tags .tag').click(function () {
        event.preventDefault();
        $('.klients-main .tab').removeClass('active');
        var tag = $(this).html();
        $('.klients-main .tab[data-cat="'+tag+'"]').click();
    });

    function sortCats() {
        var cats = $('.klients-main .tab.active');
        if (cats.length > 0){
            $('.klients-item').hide();
            cats.each(function () {
                var filter = $(this).data('cat');
                $('.klients-item[data-type*="'+filter+'"]').show();
            });
        } else {
            $('.klients-item').show();
        }
    }

});


(function($) {
    $.fn.removeClassWild = function(mask) {
        return this.removeClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+');
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
})(jQuery);