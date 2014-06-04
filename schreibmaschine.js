var backspace = new Audio('audio/backspace.mp3');
var enter = new Audio('audio/return.mp3');
var space = new Audio('audio/space.mp3');
var key = new Audio('audio/key-02.mp3');

document.onkeydown = function(event) {
  //console.log(event.keyCode);
  k = event.keyCode;

  if (k === 8 || k === 46) {
    backspace.play();
  } else if (k === 13) {
    enter.play();
  } else if (k === 32) {
    space.play();
  } else {
    key.play();
  }
}
