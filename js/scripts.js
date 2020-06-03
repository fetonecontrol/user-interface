// Business Logic


const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

// User Interface Logic

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const result = add(number1, number2);
  $("#output").text(result);

  });

  $("for#sub").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#sub1").val());
  const number2 = parseInt($("#sub2").val());
  const result = sub(number1, number2);
  $("output").text(result);

  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#mult1").val());
    const number2 = parseInt($("#mult2").val());
    const result = multiply(number1, number2);
    $("#output3").text(result);

  })

  

});


  
