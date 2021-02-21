alert("script file linked");

var soundArray = ["sounds/snare.mp3", "sounds/kick-bass.mp3",
                  "sounds/tom-1.mp3", "sounds/tom-2.mp3",
                  "sounds/tom-3.mp3", "sounds/tom-4.mp3",
                  "sounds/crash.mp3"];
/* upper index bound for drums */
var numDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numDrums; i++){
  document.querySelectorAll(".drum").addEventListener("click", function(){
    sound(soundArray[i]);

  });
}

/* adding event listeners for all of our buttons */
/*
document.querySelector(".w").addEventListener("click", sound);
document.querySelector(".a").addEventListener("click", sound);
document.querySelector(".s").addEventListener("click", sound);
document.querySelector(".d").addEventListener("click", sound);
document.querySelector(".j").addEventListener("click", sound);
document.querySelector(".k").addEventListener("click", sound);
document.querySelector(".l").addEventListener("click", sound);*/

function sound(url){
  new Audio(url).play();
}
