var video = document.querySelector('.video');
var purpleRoku = document.querySelector('.purple-roku');
var btn = document.getElementById('play-pause');
var controls = document.querySelector('.controls');
var container = document.querySelector('.container');

//remove media player banner after a few seconds
//doesn't let you access play banner again
// function hideControls(){
//     document.querySelector('.controls').style.transform ='translateY(70px)';
// }

// window.setTimeout( hideControls, 5000 );


function togglePlayPause() {
    if(video.paused){
        btn.className = 'pause';
        video.play();
    }

    else {
        btn.className ="play";
        video.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
};


//changing the css to update length of purple line with current time within in the video player
video.addEventListener('timeupdate', function(){
    var purpleLinePos = video.currentTime / video.duration;
   purpleRoku.style.width = purpleLinePos * 100 + "%";
   if (video.eneded) {
       btn.className = "play";
   }
}
)