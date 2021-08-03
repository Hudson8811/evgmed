
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
