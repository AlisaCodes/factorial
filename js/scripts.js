var factorial = function(number) {
  var total = number;
  if(number === 0) {
    return 1;
  } else {
      for(var i = 0; i <= number; i += 1) {
      number = number -1;
      total = total * (number);
      }
    return total;
  }
};


$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".number").text(number);
    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
