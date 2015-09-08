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
