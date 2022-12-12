// Assignment Code

var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var nums = "1234567890";
var specChars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

var chooseUp;
var chooseLow;
var chooseNums;
var chooseChars;
var criteria = "";
var password = "";
var chosen = "";
var combo = "";
var newPass = "";

var generatePassword = function () {

  var passLengthChoose = window.prompt("Please choose a password length between 8 and 128 characters:");
  var passLength = parseInt(passLengthChoose);
  console.log(passLength);

  if (passLength >= 8 && length <= 128) {
    window.alert("Great! Let's choose some more criteria.");
  }
  else {
    return;
  }
  
  chooseUp = window.confirm("Use uppercase?"); 
    
  chooseLow = window.confirm("Use lowercase?");
    
  chooseNums = window.confirm("Use numbers?");              
    
  chooseChars = window.confirm("Use special characters?");

  
  if (chooseUp) {
    criteria = criteria.concat(uppercase);
  }
  if (chooseLow) {
    criteria = criteria.concat(lowercase);
  }
  if (chooseNums) {
    criteria = criteria.concat(nums);
  }
  if (chooseChars) {
    criteria = criteria.concat(specChars);     
  }
 else if (!chooseUp && !chooseLow && !chooseNums && !chooseChars) {
    window.alert("Please choose at least one type of criteria.");
  }

  console.log(criteria);

  for (var i = 0; i < passLength; i++) {
    chosen = Math.floor(Math.random() * criteria.length);
    console.log(chosen);
    combo = criteria[chosen];
    console.log(combo);
    newPass = newPass.concat(combo);
    console.log(newPass);
  }
  return(newPass);
    
  }
  
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