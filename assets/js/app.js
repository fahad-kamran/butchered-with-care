// global js file
console.log('global js');
let modal = document.getElementById("youtube-video-modal");
let iframe = modal.querySelector("iframe");

modal.addEventListener("hidden.bs.modal", function () {
    let videoSrc = iframe.src;
    // Replace 'autoplay=1' with 'autoplay=0' to stop the video
    iframe.src = videoSrc.replace("autoplay=1", "autoplay=0");
});