alert("script file linked");


/* adding event listeners for all of our buttons */
document.querySelector(".w").addEventListener("click", sound);
document.querySelector(".a").addEventListener("click", sound);
document.querySelector(".s").addEventListener("click", sound);
document.querySelector(".d").addEventListener("click", sound);
document.querySelector(".j").addEventListener("click", sound);
document.querySelector(".k").addEventListener("click", sound);
document.querySelector(".l").addEventListener("click", sound);

function sound(url){
  new Audio(url).play();
}
