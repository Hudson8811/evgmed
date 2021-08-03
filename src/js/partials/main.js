$(document).ready(function() {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");



});
function callPopupBrif() {
    event.preventDefault();
    $.fancybox.open({
        src: '#popup-brif',
        type: 'inline',
        touch: false,
    });
}

function openVideo(elem) {
    event.preventDefault();
    var src = $(elem).siblings('.video-modal')[0];
    $.fancybox.open({
        src: src,
        type: 'inline',
        touch: false,
        slideClass: "videoBox",
    });
}
