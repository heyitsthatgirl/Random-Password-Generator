// Assignment Code

var generateBtn = document.querySelector("#generate");

var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowCase = "abcdefghijklmnopqrstuvwxyz";
console.log(lowCase);//logs lowercase string

var nums = "123456789";
console.log(nums);//logs numbers

var chars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
console.log(chars);//special characters

var generatePassword = function() {

  var pwordLength = window.prompt("Choose a password length between 8 and 128 characters:");
  
  if (!pwordLength) { //closes out function if user presses cancel
    return;
   } 
  
  var length1 = (pwordLength >= 8);
  var length2 = (pwordLength <= 128);

 if (length1 && length2) { //moves user forward if input is true
  window.confirm("Thanks! Let's choose some more criteria.");
 } else if (!length1 || !length2) { //if input is false (doesnt meet criteria) user starts over
  window.alert("Please try again");
 }

 var uppercaseChar = window.confirm("Use UPPERCASE letters?");

 if (uppercaseChar) {
  window.alert("Thanks!");
 } else if (!uppercaseChar) {
    window.alert("Got it, no UPPERCASE letters.");
    }
  
 var lowercaseChar = window.confirm("Use lowercase letters?");

 if (lowercaseChar) {
  window.alert("Thanks!");
 } else if (!lowercaseChar) {
  window.alert("Got it, no lowercase letters");
 }

 var includeNum = window.confirm("Include numbers?");

 if (includeNum) {
  window.alert("Thanks!");
 } else if (!includeNum) {
  window.alert("Got it, no numbers.");
 }

 var specChar = window.confirm("Include special characters?");

 if (specChar) {
  window.alert("Thanks!");
 } else if (!specChar) {
  window.alert("Got it, no special Characters");
 }
 }

// var lngth = [128];
// var index = Math.floor(Math.random() * lngth) +8 ; 
// console.log(index);//randomly selects a number between 8 and 128



function writePassword() {
  var password = generatePassword(); //local variable 
  var passwordText = document.querySelector("#password"); //targets the element with an id of "password"-the text box in the middle

  passwordText.value = password; //sets the value of text box to a randomly generated password

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