/**
 * Created by nikolay.bury on 10/7/13.
 */

function removeActiveQuestion() {
    $('.question-list .active').each(function() {
        $(this).removeClass('active');
    });
}


function restoreAppState() {
    var videoPlayer = document.getElementById('video-player');
    removeActiveQuestion();
    videoPlayer.pause(); // stop playing video
    $(videoPlayer).hide();
    $('#splash').show();
}


$(function() {
    $('.video-link').on('click', function(event) {

        event.preventDefault();
        var url = $(this).attr('href'),
            videoPlayer = document.getElementById('video-player');
        $('#splash').hide();
        $(videoPlayer).show();
        //console.log('[url] '  + url);
        //console.log(videoPlayer);


        // update question actives
        removeActiveQuestion();
        $(this).closest('li').addClass('active');

        // change video src
        videoPlayer.pause();
        videoPlayer.setAttribute('src', url);
        videoPlayer.load();
        videoPlayer.play();

        videoPlayer.addEventListener('ended', function() {
            restoreAppState();
        },false);
    });


    // logo click - return to original state
    $('#logo-btn').on('click', function() {
      restoreAppState();
    });
});