var buttoncount = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttoncount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var currentkey = this.innerHTML;
    makesound(currentkey);
  });
}



document.addEventListener("keypress", function(event) {
  makesound(event.key);
})


function makesound(sound) {
  switch (sound) {
    case "w":
      var tom = new Audio("sounds/tom-1.mp3");
      tom.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "q":
      var tom5 = new Audio("sounds/snare.mp3");
      tom5.play();
      break;
    case "e":
      var tom6 = new Audio("sounds/kick-bass.mp3");
      tom6.play();
      break;
    case "l":
      var tom7 = new Audio("sounds/crash.mp3");
      tom7.play();
      break;
    default:
      console.log(sound);
      break;
  }
}
