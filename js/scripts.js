$(document).ready(function() {
  var answer = prompt("Would you like to learn about turtles, snakes, or insects? Write one of the three answers below:");

  if (answer === "turtles") {
    $("#turtles").show();
  } else if (answer === "snakes") {
      $("#snakes").show();
    } else {
        $("#insects").show();
      }
});
