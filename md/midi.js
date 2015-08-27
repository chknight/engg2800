
$(window).ready(function (){
  adjustBackground();
  adjustKeyboardPosition();
});

$(window).resize(function() {
  adjustBackground();
  adjustKeyboardPosition();
});

function adjustBackground (argument) {
  var height=$(window).height;
  var width=$(window).width;
  $("#background").css({"height":height, "width":width});
};

function adjustKeyboardPosition(argument) {
  var width=$("#piano-keyboard").width;
  var windowWindth=$(window).width;
  var left=(windowWindth-width)/2;
  console.log(width);
  $(".keyboard").css({"left":left});
};