
$(window).ready(function (){
  adjustBackground();
  console.log("hehe");
});

$(window).resize(function() {
  adjustBackground();
})

function adjustBackground (argument) {
  var height=$(window).height;
  var width=$(window).width;
  $("#background").css({"height":height, "width":width});
};