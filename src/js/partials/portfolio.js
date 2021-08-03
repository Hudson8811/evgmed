var vids = $("video");
if ($('.team-video-block').length > 0) {
    $.each(vids, function () {
        this.controls = false;
    });

    $(".team-video-block video").click(function () {
        var video = $(".team-video-block video")[0];
        if (video.paused && !video.controls){
            $(".team-video-block .play-vid").attr("style", "display:none");
            video.controls = true;
            setTimeout(function () {
                video.play();
            }, 100);
        } else  if (!video.paused && video.controls){
            $(".team-video-block .play-vid").attr("style", "display:block");
        } else {
            $(".team-video-block .play-vid").attr("style", "display:none");
        }
    });

    $(".team-video-block .play-vid").click(function () {
        var video = $(".team-video-block video")[0];
        $(".team-video-block .play-vid").attr("style", "display:none");
        video.controls = true;
        video.play();
    });
}


$(document).ready(function() {
	if ($('.portfolio-top__tag').length > 0){
		tagsRecalc()
		$(window).resize(function () {
			tagsRecalc()
		});
	}
});

function tagsRecalc(){
	$('.portfolio-top__tag').appendTo('.portfolio-top__tags');
	$('.portfolio-top__tags-inner,.portfolio-top__sep').remove();
	let maxWidth = $('.portfolio-top__tags').innerWidth() - 50;
	let sepHtml = '<div class="portfolio-top__sep">|</div>';
	let innerHtml = '<div class="portfolio-top__tags-inner"></div>';
	let calcWidth = 0;
	$('.portfolio-top__tags').append(innerHtml);
	$('.portfolio-top__tag').each(function (){
		let tagWidth = $(this).innerWidth();

		if (calcWidth + tagWidth < maxWidth){
			if (calcWidth > 0) $('.portfolio-top__tags-inner:last-child').append(sepHtml);
			calcWidth += tagWidth;
		} else {
			$('.portfolio-top__tags').append(innerHtml);
			calcWidth = tagWidth;
		}
		$(this).appendTo('.portfolio-top__tags-inner:last-child');
	});
}