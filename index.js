/*index.js for drumkit site
  Author: Justin Singleton */

var soundArray = ["sounds/snare.mp3", "sounds/kick-bass.mp3",
  "sounds/tom-1.mp3", "sounds/tom-2.mp3",
  "sounds/tom-3.mp3", "sounds/tom-4.mp3",
  "sounds/crash.mp3"
];

var keyArray = ["w", "a", "s", "d", "j", "k", "l"];

/* upper index bound for drums and keys*/
var numDrums = document.querySelectorAll(".drum").length;
var numKey = keyArray.length;

// making the sounds availible through the keyboard
document.addEventListener("keydown", function(event) {
  var aKey = event.key;

  switch(aKey){
    case "w":
      sound(soundArray[0]);
      buttonAnimation(keyArray[0]);
      break;
    case "a":
      sound(soundArray[1]);
      buttonAnimation(keyArray[1]);
      break;
    case "s":
      sound(soundArray[2]);
      buttonAnimation(keyArray[2]);
      break;
    case "d":
      sound(soundArray[3]);
      buttonAnimation(keyArray[3]);
      break;
    case "j":
      sound(soundArray[4]);
      buttonAnimation(keyArray[4]);
      break;
    case "k":
      sound(soundArray[5]);
      buttonAnimation(keyArray[5]);
      break;
    case "l":
      sound(soundArray[6]);
      buttonAnimation(keyArray[6]);
      break;
    default:
      break;
  }
});

for (var i = 0; i < numDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
    var buttonInnerHtml = this.innerHTML;
    console.log(buttonInnerHtml);
    sound(soundArray[i]);
    buttonAnimation(buttonInnerHtml);
  });
}

function sound(url) {
  new Audio(url).play();
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}
