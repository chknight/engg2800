
$(window).ready(function (){
  adjustBackground();
  adjustKeyboardPosition();
  dealWithCheckbox();
  dealWithBoardClick();
  dealWithKeyboardInput();
});

$(window).resize(function() {
  adjustBackground();
  adjustKeyboardPosition();
});

function adjustBackground (argument) {
  var height=$(window).height;
  var width=$(window).width;
  $("#background").css({"height":height, "width":width});
}

function adjustKeyboardPosition(argument) {
  var width=1178
  var windowWindth=$(window).width();
  var left=(parseInt(windowWindth)-parseInt(width))/2;
  console.log(width);
  console.log(windowWindth);
  $(".keyboard").css({"left":left});
  console.log(left);
}


function dealWithCheckbox(argument) {
  var choseNumber = 0;
  var $blocks = $(".process-block");
  $(":checkbox").click(function(event) {
    /* Act on the event */
    if (choseNumber != $blocks.index($(this))) {
      $blocks.removeAttr('disabled');
      $blocks[choseNumber].click();
      choseNumber = $blocks.index($(this));
      $(this).click();
      $(this).attr('disabled','disabled');
    }
  });
}

function dealWithBoardClick(argument) {
  var $left=$(".left-opt");
  var $right=$(".right-opt");
  var $choice=$(".choice");

  $left.click(function(event) {
    var tune=$("#tune").html();
    var num=parseInt(tune);
    num=num-5;
    $("#tune").html(num);
  });

  $right.click(function(event) {
    var tune=$("#tune").html();
    var num=parseInt(tune);
    num=num+5;
    $("#tune").html(num);
  });

  $choice.click(function(event) {
    var tune=$(this).html();
    $("#tune").html(tune);
  });
}

function dealWithKeyboardInput(argument) {
  var blackkey=['S','D','G','H','J','2','3','5', '6', '7'];
  $("body").keydown(function(event) {
    /* Act on the event */
    // console.log(event.which);
    var keycode=parseInt(event.which);
    var keychar=String.fromCharCode(keycode);
    if ((keycode>=48 && keycode <= 90)) {
      var $key = $(".key").filter(":contains("+keychar+")");
      var keychar=String.fromCharCode(keycode);
      if (contain(keychar, blackkey)) {
        $key.addClass('blackdown');
        console.log($key);
      } else {
        $key.addClass('keyhover');
        $key.removeClass("keyhover");
        $key.addClass('keydown');
      }
    }
  });

  $("body").keyup(function(event) {
    var keycode=parseInt(event.which);
    /* Act on the event */
    if ((keycode>=48 && keycode <= 90)) {
      var keychar=String.fromCharCode(keycode);
      var $key = $(".key").filter(":contains("+keychar+")");
      if (contain(keychar, blackkey)) {
        $key.removeClass('blackdown');
      } else {
        $key.removeClass('keydown');
      }
    }
  });
}

function contain(code, obj) {
  for (i in obj) {
    if (code == obj[i])
      return true;
  }
  return false;
}