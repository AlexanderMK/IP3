/* === Business Logic === */

var myPing = function (number) {
  for (var i = 1; i <= number; i++) {
    if(i % 3 === 0 & i % 5 === 0) {
      $("ul#output").append("<li class='remove'>pingpong</li>");
  }   else if(i % 3 === 0){
    $("ul#output").append("<li class='remove'>ping</li>");
  }   else if(i % 5 ===0) {
    $("ul#output").append("<li class='remove'>pong</li>");
  } else {
    $("ul#output").append("<li class='remove'>" + String(i) + "</li>")
    }
  }
}

/*=== User Interface ==== */
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    $("li.remove").remove();
    var number = parseInt($("input#ping").val());
    myPing (number);
  })
})
