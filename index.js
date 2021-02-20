alert("script file linked");

document.querySelector(".w").addEventListener("click", w);

function w(url){
  new Audio(url).play();
}
