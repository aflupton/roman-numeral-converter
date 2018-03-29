function romanize(num){
  if (!+num)
    alert("Please enter an integer >=1")
  var result = "";
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numerals = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i=0; i < decimals.length; i++){
    while (num % decimals[i] < num){
      result += numerals[i]

      num -= decimals[i];
    }
  }
  return result;
};

$(document).ready(function(){
  $("#formInput").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#inputNum").val());
    var romanizedNumber = romanize(userInput);
      //throws out invalid inputs
    if (userInput > 3999){
      alert("Please enter an integer less than 4000")
    } else if (userInput < 0) {
      alert("Please enter an integer greater than 0")
    } else {
      //prints and shows result
      $(".romanOutput").text(romanizedNumber);
      $("#result").fadeIn("slow");
      //hides old result
      $("#formInput").click(function(){
        $("#result").fadeOut("slow");
      });
    }

  });
});
