// Assignment Code

var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chooseUp;

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var chooseLow;

var nums = "123456789";
var chooseNums;

var specChars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var chooseChars;

var generatePassword = function () {

  length = window.prompt("Please choose a password length between 8 and 128 characters:");

  if (length < 8 || length > 128) {
    window.alert("Try again. Please enter a length between 8 and 128 characters.");
  }


  chooseUp = window.confirm("Use uppercase?"); 
  
  chooseLow = window.confirm("Use lowercase?");

  chooseNums = window.confirm("Use numbers?");

  chooseChars = window.confirm("Use special characters?");

  if (chooseUp) {
    + uppercase;
  }
  if (chooseLow) {
    + lowercase;
  }
  if (chooseNums) {
    + nums;
  }
  if (chooseChars) {
    + specChars;
  }
}



// var lngth = [128];
// var index = Math.floor(Math.random() * lngth) +8 ; 
// console.log(index);//randomly selects a number between 8 and 128



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page