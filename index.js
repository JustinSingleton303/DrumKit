/*index.js for drumkit site
  Author: Justin Singleton */

var soundArray = ["sounds/snare.mp3", "sounds/kick-bass.mp3",
  "sounds/tom-1.mp3", "sounds/tom-2.mp3",
  "sounds/tom-3.mp3", "sounds/tom-4.mp3",
  "sounds/crash.mp3"
];

var keyArray = ["w", "a", "s", "d", "j", "k", "l"];

/* upper index bound for drums */
var numDrums = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function() {
  alert("key pressed");
});

for (var i = 0; i < numDrums; i++) {
  document.querySelectorAll(".drum").addEventListener("click", function() {
    sound(soundArray[i]);

  });
}

function sound(url) {
  new Audio(url).play();
}
