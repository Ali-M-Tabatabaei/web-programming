let video = document.getElementById("myVideo");
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");
let muteButton = document.getElementById("muteButton");
let progress = document.getElementById("myProgress");
let bar = document.getElementById("myBar");

let videos = ["movie1.mp4", "movie2.mp4", "movie3.mp4"];
let currentVideo = 0;

playButton.addEventListener("click", function() {
  video.play();
});

pauseButton.addEventListener("click", function() {
  video.pause();
});

nextButton.addEventListener("click", function() {
  currentVideo++;
  if (currentVideo >= videos.length) currentVideo = 0;
  video.src = videos[currentVideo];
  video.play();
});

prevButton.addEventListener("click", function() {
  currentVideo--;
  if (currentVideo < 0) currentVideo = videos.length - 1;
  video.src = videos[currentVideo];
  video.play();
});

muteButton.addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
});

video.addEventListener("timeupdate", function() {
  let progressPos = video.currentTime / video.duration;
  bar.style.width = progressPos * 100 + "%";
});
