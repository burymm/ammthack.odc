/**
 * Created by nikolay.bury on 10/7/13.
 */

$(function() {
    $('.video-link').on('click', function(event) {

        event.preventDefault();
        var url = $(this).attr('href'),
            videoPlayer = document.getElementById('video-player');
        $('#splash').hide();
        $(videoPlayer).show();
        //videoPlayer.stop();
        console.log('[url] '  + url);
        console.log(videoPlayer);

        videoPlayer.pause();
        videoPlayer.setAttribute('src', url);
        videoPlayer.load();
        videoPlayer.play();

        $('#doctor-name').html(videoPlayer.getAttribute('src'));
    });
});